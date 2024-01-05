SELECT app_name, rating, category FROM analytics
    WHERE (rating, category) IN (
        SELECT MAX(rating), category FROM analytics
            WHERE min_installs >= 50000
            GROUP BY category
        )
    ORDER BY category;


SELECT * FROM analytics
    WHERE app_name LIKE '%facebook%';


SELECT * FROM analytics
    WHERE array_length(genres, 1) = 2;


SELECT * FROM analytics
    WHERE genres @> '{"Education"}';