-- For the role of "Creative", need to pay the 3rd users with the highest rating 10$ to their account.

UPDATE "Users" AS U
SET balance = U.balance + 10
WHERE U.id IN (SELECT id FROM "Users"
   WHERE role = 'creator'
   ORDER BY rating
   DESC
   LIMIT 3 );