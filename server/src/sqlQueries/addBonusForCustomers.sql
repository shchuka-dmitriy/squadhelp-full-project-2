-- To all users with the "customer" role who carried out orders on New Year's holidays
-- in the period from December 25 to January 14, must add 10% of the cash back
-- from all orders in this period.


INSERT INTO "Contests" ("orderId", "userId", "contestType", status, prize, priority, "createdAt") VALUES
('1', 1, 'name', 'finished', 100, 1, '2019-12-27'),
('1', 2, 'name', 'finished', 200, 1, '2020-01-11'),
('1', 3, 'name', 'finished', 100, 1, '2020-01-11'),
('1', 4, 'name', 'finished', 300, 1, '2020-01-20'),
('1', 5, 'name', 'finished', 100, 1, '2020-01-05'),
('1', 1, 'name', 'finished', 200, 1, '2020-01-11'),
('1', 6, 'name', 'finished', 100, 1, '2019-12-27'),
('1', 6, 'name', 'finished', 100, 1, '2020-01-11'),
('1', 1, 'name', 'finished', 100, 1, '2020-01-20'),
('1', 6, 'name', 'finished', 300, 1, '2019-12-29'),
('1', 2, 'name', 'finished', 100, 1, '2020-01-20'),
('1', 4, 'name', 'finished', 100, 1, '2019-12-28');


UPDATE "Users" AS U
SET balance = balance + 0.1 * totalPrize
FROM (SELECT U.id, sum(prize) AS totalPrize FROM "Users" AS U
      JOIN "Contests" AS C ON U.id = C."userId"
      WHERE ("createdAt" BETWEEN ('2019-12-25') AND ('2020-01-14')) AND role = 'customer'
      GROUP BY U.id) AS customers
WHERE U.id = customers.id;