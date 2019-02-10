-- ejercicio 1
Use sakila;
Select name 
from language 
order by name

-- ejercicio 2
Select first_name, last_name 
 from actor
 Where last_name like '%son%'
 Order by first_name 

-- ejercicio 3

Select address 
from address 
Where district = ''
Order by city_id

-- ejercicio 4

Select film.title, category.name
From film, category, film_category
Where film.film_id=film_category.film_id
   And film_category.category_id = category.category_id
   Order by film.title;
