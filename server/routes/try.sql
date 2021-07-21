use sql_crm;
-- SELECT *,client.id as id 
--     FROM client LEFT JOIN email_type ON 
--         client.email_type_id = email_type.id

-- SELECT  *,client.id as id 
--     FROM client 
--     LEFT JOIN email_type ON client.email_type_id = email_type.id
--     LEFT JOIN country ON client.country_id = country.id
--     LEFT JOIN owner ON client.owner_id = owner.id
--     LIMIT 500,520

-- select country.id FROM country 
--     Where country = 'italy'

-- UPDATE client
--             SET sold = 1
--             WHERE client.last = 'Jamal'
--             AND client.first = 'Ameer'

-- select count(client.date) from client
--     where client.date like '%.7.2021'

        -- select count(client.email_type_id) from client
        -- where client.email_type_id IS NOT NULL
    
-- select count(client.id) from client 
--     where client.sold = 0


-- select owner,count(client.owner_id) from client
--     LEFT JOIN country ON client.country_id = country.id
--     WHERE sold = 1
--     GROUP BY country ORDER BY count(sold) DESC LIMIT 1        

-- select  count(client.id) , owner from client
--         LEFT JOIN owner On client.owner_id = owner.id
--         WHERE client.sold = 1
--         GROUP BY owner 
--         ORDER BY count(client.id) DESC LIMIT 3

-- select country,count(client.id) from client   
--         LEFT JOIN country on client.country_id = country.id
--         where client.sold = 1
--         group by country

select count(client.id) from client  
        where client.sold = 1 AND
        date LIKE '%.1.%'  

