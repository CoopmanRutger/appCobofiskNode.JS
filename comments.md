18/04
======
- avoid dynamic sql in your code to avoid sql injection: this must be resolved in
your final version. (you already wrote this todo in comments)
OK

- why do you change the order of your arguments in MySqlRepo.js (sometimes handler first/second)
OK

- the fucntion "executeQuery" will never work because connection.query is asynchronous:
you will close the connection before the query is executed.
OK