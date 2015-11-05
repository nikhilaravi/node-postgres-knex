PSQL commands

# Meta commands (with unquoted backslash)

\c connect dbname
\C title - set the title of db being printed
\d - shows relations
\timing [on/off] - toggles display of how long each SQL command takens
\pset - set the border


# SQL Queries

Add semicolon at the end of the query.

## Single table

CREATE TABLE tablename

DROP TABLE tablename

SELECT [list of column names] FROM tablename

SELECT [column names] FROM tablename
  WHERE condition
  ORDER BY condition

## Join

Quality Column names in a join query case two tables have columns with the same name e.g:

SELECT weather.city, weather.temp_lo, weather.temp_hi, cities.location
    FROM weather, cities
    WHERE cities.name = weather.city;

### Types of Joins

- Inner join
  - Left
     Table on the left of the join operator will have each of its rows output least once, table on the right will only have those rows output that match some row of the left table. A left-table row for which there is no right-table match, null values are substituted for the right-table columns.
  - Right
- Outer join
- Self join
  Compare a row value that is in the same range as other row values in the same table

## Subqueries within Queries

Perform an aggregate function and use the result in a query

SELECT city FROM weather
    WHERE temp_lo = (SELECT max(temp_lo) FROM weather);

## Group By

- use for columns which have multiple rows with the same value

## Having

- select row by condition

WHERE selects input rows before groups and aggregates are computed ( controls which rows go into the aggregate computation).

HAVING selects group rows after groups and aggregates are computed.

## Views

Save a view over a query - use this name to view the output of a query like a normal table

## Foreign Keys

Only allow rows to be inserted in which a particular column's entry is also present in another table (e.g. to maintain referential integrity)

## Transactions

Group multiple steps into a single atomic operation - either happens completley or not

All the updates made by a transaction are logged in permanent storage before the transaction is reported complete.

Updates made so far by an open transaction are invisible to other transactions until the transaction completes, whereupon all the updates become visible simultaneously.

Surround commands with BEGIN and COMMIT

BEGIN;
UPDATE accounts SET balance = balance - 100.00
    WHERE name = 'Alice';
-- etc etc
COMMIT;

Can also define intermediate 'SAVEPOINTS name' and use ROLLBACK TO.

The changes between the savepoint and the rollback command are not saved.


## Window

Perform aggregate calculations for groups of rows and output all the rows with an additional column containing the result of the aggregate calculation

e.g.


## Unique constraints

Specify if the data in a column should be unique with respect to all the rows in the table/or the entire table. (exludes null values)

## Primary Keys

Indicates a column can be used as a unique identifier for rows in the table

## Restrictions and Cascading

For tables which contain references to other tables - use RESTRICT and CASCADE to prevent deletions affecting referenced rows.

ON DELETE RESTRICT  - to prevent deletion of a referenced row
ON DELETE CASCADE - when a referenced row is deleted, rows referencing it should also be deleted.

## Inheritance

Inheritance does not automatically propagate data from INSERT or COPY commands to other tables in the inheritance hierarchy.

Not recommended

## Partitioning 
