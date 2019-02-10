-- ejercicio 1.a

-- select first_name, last_name from actor

-- ejercicio 1.b

-- select concat (first_name,' ',last_name) as `Actor Name` from actor

-- ejercicio 2.a

-- select actor_id, first_name, last_name from actor
-- where first_name = 'Joe';

-- ejercicio 2.b

-- select * from actor

-- where last_name Like '%GEN%'

-- ejercicio 2.c

-- select * from actor

-- where last_name Like '%LI%'

-- order by last_name, first_name

-- ejercicio 2.d

-- select country_id, country
-- from country
-- where country in ('Afghanistan','Bangladesh', 'China')

-- ejercicio 3.a

-- alter table actor add column middle_name varchar(30) Null after first_name

-- ejercicio 3.b

-- alter table actor modify middle_name blob

-- ejercicio 3.c

-- alter table actor drop middle_name

-- ejercicio 4.a

-- select last_name, count(*)
-- from actor
-- group by last_name

-- ejercicio 4.b

-- select last_name, count(*)
-- from actor
-- group by last_name
-- having count(*)>2

-- ejercicio 4.c

-- update actor
-- set first_name = 'HARPO'
-- WHERE first_name = 'GROUCHO'
-- AND last_name = 'WILLIAMS'

-- ejercicio 4.d

-- UPDATE actor SET first_name = CASE 
-- WHEN first_name = 'GROUCHO' AND last_name = 'Williams' THEN 'MUCHO GROUCHO' 
-- WHEN first_name = 'HARPO' AND last_name = 'Williams' THEN 'GROUCHO'
-- ELSE first_name
-- END
-- WHERE last_name = 'Williams';

-- ejercicio 5.a

-- SHOW CREATE TABLE address

-- ejercicio 6.a

-- select first_name, last_name, address 
-- from staff
-- inner join address on staff.address_id = address.address_id

-- ejercicio 6.b

-- select username ,Sum(amount)
-- from staff
-- inner join payment on staff.staff_id = payment.staff_id
-- where payment_date between '2005-08-01 00:00:00' and '2005-09-01 00:00:00'
-- group by username

-- ejercicio 6.c

-- select title, count(*) as Actores from film
-- 	inner join film_actor on film.film_id = film_actor.film_id
-- 	group by title;

-- ejercicio 6.d
-- select title, count(inventory_id) 
-- from inventory 
--  inner join film on inventory.film_id=film.film_id
-- 	where title = 'hunchback impossible'
-- 	group by title;

-- ejercicio 6.e
-- select first_name, last_name, SUM(amount) 
-- from customer 
--  inner join payment on customer.customer_id=payment.customer_id
-- 	group by first_name, last_name
--     order by last_name;

-- ejercicio 7.a

-- select title, name 
-- from film 
--  inner join language on film.language_id=language.language_id
-- 	where name = 'English' and title like 'k%' or title like 'q%';

-- ejercicio 7.b
-- select title, first_name, last_name 
-- from actor 
--     inner join film_actor on actor.actor_id = film_actor.actor_id
-- 	   inner join film on film_actor.film_id=film.film_id
--     where title ='alone trip';

-- ejercicio 7.c

-- select first_name, last_name, email 
-- from customer 
-- inner join address on customer.address_id = address.address_id
-- inner join city on address.city_id = city.city_id
-- inner join country on city.country_id = country.country_id
-- where country='Canada'

-- ejercicio 7.d

-- select title, name as Genero 
-- from film_category
-- 	inner join category on category.category_id=film_category.category_id
-- 	inner join film on film.film_id=film_category.film_id
-- 	where name='family';

-- ejercicio 7.e

-- select title, count(*) 
-- from payment
-- 	inner join rental on payment.rental_id=rental.rental_id
-- 	inner join inventory on rental.inventory_id=inventory.inventory_id
-- 	inner join film on inventory.film_id=film.film_id
-- 	group by title
-- 	order by count(*) desc;

-- ejercicio 7.f

-- select store_id, concat('$ ',format(SUM(amount),2)) as USD
-- from staff 
-- 	join payment on staff.staff_id = payment.staff_id
-- 	group by store_id;

-- ejercicio 7.g

-- select store_id, city, country 
-- from staff
-- 	inner join address on staff.address_id = address.address_id
-- 	inner join city on address.city_id = city.city_id
-- 	inner join country on city.country_id = country.country_id

-- ejercicio 7.h

-- select name as Genero ,concat('$ ',format(SUM(amount),2)) as Dinero
-- from category
-- 	inner join film_category on category.category_id=film_category.category_id
-- 	inner join inventory on film_category.film_id=inventory.film_id
-- 	inner join rental on inventory.inventory_id=rental.inventory_id
-- 	inner join payment on rental.rental_id=payment.rental_id
--     group by Genero
--     order by SUM(amount) desc
--     limit 5 

-- ejercicio 8.a

-- create view Top5Generos as(
-- select name as Genero ,concat('$ ',format(SUM(amount),2)) as Dinero
-- from category
-- 	inner join film_category on category.category_id=film_category.category_id
-- 	inner join inventory on film_category.film_id=inventory.film_id
-- 	inner join rental on inventory.inventory_id=rental.inventory_id
-- 	inner join payment on rental.rental_id=payment.rental_id
--     group by Genero
--     order by SUM(amount) desc
--     limit 5 
-- 	); 

-- ejercicio 8.b

-- select * from Top5Generos

-- ejercicio 8.c

-- drop view Top5Generos;



