# React CA1

Name: Jia Yang

Student Number: 20104736

## References:

TMDB Database: https://www.themoviedb.org

Youtube: https://youtu.be/9YGrKseNQ_4

GitHub：https://github.com/Yolanda2002/react-lab-CA

## React App Features

- **Feature 1:** Filters

  Enhanced search functionality allowing users to filter movies by various criteria including genre, rating, and languages.

- **Feature 2:**  Top Rated Movies Page

  Added a new Top Rated Movies interface to give users access to the highest rated movies, as well as using the ability to add playlists and enter movie detail pages.

- **Feature 3:** Movie Details Design

  Optimize the design and functionality of movie detail pages.

- **Feature 4:** TV Shows Page

  Add TV Shows interface, integrate database and add language filters.

- **Feature 5:**  People Page

  Add People page to add the ability to filter by gender. Use cards to display movie stars with names and movies they have appeared in. Movies can be linked to jump to the movie details page.

## Functions

### 1.People Page Development

Cards with famous people's image, name

Links to movies from people

Add Filter with gender

Designed docorations

### 2.Movie Page Extentions

New page of Top Rated Movies

Add Language Filter

Decorate Movie Details Page

Add functions to Top Rated Movies Page

New Decorations for filter card

### 3.TV Show Page Development

Create TV Show Page

To reduce code redundunt, reuse movie template

Add new filter logic to TV Page

Decorate the TV Page



## Development Process

### 1.Add People Page 

After browsing through TMDB, I found that the current software lacks the introduction of movie stars, so I plan to make an interface to introduce famous people.

![1](https://github.com/Yolanda2002/react-lab-CA/blob/6b132f91338ab91f934e4385ea82b09a2f2c875f/image/1.png)

1. First, I tried to connect with TMDB to get the celebrity names

2. Second, I designed the UI of the page to put them into the PeopleCard component and loaded their photos to make this format.

![2](https://github.com/Yolanda2002/react-lab-CA/blob/6b132f91338ab91f934e4385ea82b09a2f2c875f/image/2.png)

3.Next, I think the design of this interface is too different from the previous ones, so I'm going to add the title at the top and adjust the formatting to make it display more comfortably.

![3](https://github.com/Yolanda2002/react-lab-CA/blob/6b132f91338ab91f934e4385ea82b09a2f2c875f/image/3.png)



4. I added the function of filter, so that users have the freedom to filter, categorized by gender, so that it is more convenient to find their favorite actor

Here is the link: https://www.themoviedb.org/person/27972-josh-hutcherson

And it worked！

![4](https://github.com/Yolanda2002/react-lab-CA/blob/6b132f91338ab91f934e4385ea82b09a2f2c875f/image/4.png)



5.Add a link to the people to connect to the movie screen and automatically jump to the details when you click on it

Worked！

![5](https://github.com/Yolanda2002/react-lab-CA/blob/6b132f91338ab91f934e4385ea82b09a2f2c875f/image/5.png)

![6](https://github.com/Yolanda2002/react-lab-CA/blob/6b132f91338ab91f934e4385ea82b09a2f2c875f/image/6.png)

Clicked the link and it has redirected to the movie detailed page.



### 2.Add Functions for Movies

1.Add Top Rated Page

https://www.themoviedb.org/movie/top-rated

Use the same template as before...

![7](https://github.com/Yolanda2002/react-lab-CA/blob/6b132f91338ab91f934e4385ea82b09a2f2c875f/image/7.png)

And it also have function to add in playlist.



2.Added filter for Languages

https://www.themoviedb.org/movie/top-rated

![8](https://github.com/Yolanda2002/react-lab-CA/blob/6b132f91338ab91f934e4385ea82b09a2f2c875f/image/8.png)



### 3.Add TV Shows Page

https://www.themoviedb.org/tv

Add an interface basically modeled after the movies format.

I encountered a problem with different TMDB identifiers along the way, but solved it by using a selective approach in order to maximize code reuse ability.

![9](https://github.com/Yolanda2002/react-lab-CA/blob/6b132f91338ab91f934e4385ea82b09a2f2c875f/image/9.png)

![10](https://github.com/Yolanda2002/react-lab-CA/blob/6b132f91338ab91f934e4385ea82b09a2f2c875f/image/10.png)



4.Design the interface UI to make it more concise and generous

![11](https://github.com/Yolanda2002/react-lab-CA/blob/6b132f91338ab91f934e4385ea82b09a2f2c875f/image/11.png)

![12](https://github.com/Yolanda2002/react-lab-CA/blob/6b132f91338ab91f934e4385ea82b09a2f2c875f/image/12.png)

Added box in detailed page.


