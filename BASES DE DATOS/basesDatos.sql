-- ejemplos

-- use sakila;
-- SELECT *
-- FROM film; 

-- SELECT title as Titulo, release_year as 'Año Creacion',film_id
-- FROM film
-- where (film_id < 500 or rental_rate < 4) and language_id = 2;

-- SELECT title as Titulo, release_year as 'Año Creacion', length,rental_rate
-- from film 
-- order by length desc, rental_rate;

-- SELECT release_year as 'Año Creacion',
-- count(*)from film 
-- group by release_year;

-- select distinct release_year from film;

-- select title as Titulo,language.name as Idioma, film.language_id
-- from film 
-- inner join language on film.language_id = language.language_id

-- select f.title as Titulo,l.name as Idioma, f.language_id,
-- from film as f
-- inner join language as l on f.language_id = l.language_id 

-- select f.title as Titulo,l.name as Idioma, f.language_id, l2.name as Original
-- from film as f
-- inner join language as l on f.language_id = l.language_id 
-- inner join language as l2 on f.original_language_id = l2.language_id 

-- select f.title as Titulo,l.name as Idioma, f.language_id,coalesce(l2.name, l.name) as Original
-- from film as f
-- inner join language as l on f.language_id = l.language_id 
-- left join language as l2 on f.original_language_id = l2.language_id 

-- select f.title as Titulo,l.name as Idioma, f.language_id,coalesce(l2.name, l.name) as Original
-- from film as f
-- inner join language as l on f.language_id = l.language_id 
-- right join language as l2 on f.original_language_id = l2.language_id 

-- select title ,count(*) as Cantidad, avg(length) as duracion
-- from film as f 
-- inner join film_actor as fa on f.film_id = fa.film_id
-- inner join actor as a on a.actor_id = fa.actor_id 
-- group by title
-- having count(*)>6
-- order by Cantidad, title

-- select avg(length)
-- from film
-- group by release_year;

-- select fc.film_id, c.category_id, f.title, c.name
-- from film as f
-- inner join film_category as fc on f.film_id = fc.film_id
-- inner join category as c on fc.category_id = c.category_id