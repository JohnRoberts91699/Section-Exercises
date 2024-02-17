from flask_wtf import FlaskForm
from wtforms import SelectField, SubmitField
from wtforms.validators import DataRequired

class NewSongForPlaylistForm(FlaskForm):
    song = SelectField('Song', coerce=int, validators=[DataRequired()])
    submit = SubmitField('Add Song')
