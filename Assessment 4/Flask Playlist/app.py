from flask import Flask, render_template, redirect
from forms import NewSongForPlaylistForm
from models import Playlist, PlaylistSong, Song, db

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///playlist-app.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.secret_key = 'your_secret_key'
db.init_app(app)

@app.route("/")
def index():
    playlists = Playlist.query.all()
    return render_template("index.html", playlists=playlists)

@app.route("/playlists/<int:playlist_id>/add-song", methods=["GET", "POST"])
def add_song_to_playlist(playlist_id):
    playlist = Playlist.query.get_or_404(playlist_id)
    form = NewSongForPlaylistForm()

    curr_on_playlist = [s.id for s in playlist.songs]
    form.song.choices = (db.session.query(Song.id, Song.title)
                        .filter(Song.id.notin_(curr_on_playlist))
                        .all())

    if form.validate_on_submit():
        playlist_song = PlaylistSong(song_id=form.song.data,
                                     playlist_id=playlist_id)
        db.session.add(playlist_song)
        db.session.commit()
        return redirect(f"/playlists/{playlist_id}")

    return render_template("add_song_to_playlist.html",
                           playlist=playlist,
                           form=form)

if __name__ == "__main__":
    app.run(debug=True)
