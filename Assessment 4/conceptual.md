### Conceptual Exercise

Answer the following questions below:

- What is PostgreSQL?
- An open-source relational databse system

- What is the difference between SQL and PostgreSQL?
- SQL is a programming language and PostgreSQL is RDBMS.

- In `psql`, how do you connect to a database?
- sudo --login --user=postgres psql

- What is the difference between `HAVING` and `WHERE`?
- WHERE is applied before a GROUP BY and Having is applied after

- What is the difference between an `INNER` and `OUTER` join?
- INNER only joins rows that have matching values in both tables. OUTER joins all rows both from tables.

- What is the difference between a `LEFT OUTER` and `RIGHT OUTER` join?
- LEFT joins all rows from the left table and matching rows from the right table. Right joins all rows from the right table and matching rows from the left table.

- What is an ORM? What do they do?
- Object-Relational Mapping is a programming technique used to convert data between incompatible systems.

- What are some differences between making HTTP requests using AJAX 
  and from the server side using a library like `requests`?
  AJAX is written in Javascript and is asynchronous while HTTP requests are in a Python environment and can be both synchronous or asynchronous.

- What is CSRF? What is the purpose of the CSRF token?
- CSRF stands for Cross-Site Request Forgery. A CSRF token is used to add an additional layer of security to web applications.

- What is the purpose of `form.hidden_tag()`?
- the form.hidden_tag() includes a CSRF token in a form as a hidden input field.
