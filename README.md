# Ramadan Dish API

This Deno-based API provides information about dishes suitable for Ramadan, their cooking times, and suggests random dishes based on available ingredients.

## Usage

1. Clone the repository:

git clone https://github.com/Mootaz12/ramadan-dish-api.git

2. Run the server:

deno task dev

Execute '  deno task dev  ' to run the API locally. Refer to the deno.json file's 'dev' script, allowing essential permissions for smooth execution.

## API Endpoints:

### GET /cooktime

Retrieves the cooking time for dishes based on the specified Ramadan day and ingredients. This endpoint takes in query parameters 'day' representing the day in the Ramadan calendar and 'ingredients' as a comma-separated list of available ingredients.

#### Example request:

curl -X GET 'http://localhost:3000/cooktime?day=10&ingredients=Chicken,Tomato,Potato'

### GET /suggest

Fetches a random suggested dish based on the specified Ramadan day. This endpoint requires a 'day' query parameter indicating the day in the Ramadan calendar.

#### Example request:

curl -X GET 'http://localhost:3000/suggest?day=15'


### Test the API Endpoints Using api.rest
Additionally, you can test the API endpoints directly using an api.rest file with compatible REST Client extensions in your preferred code editor.


### API Integration: Aladhan Prayer Times

This project utilizes the Aladhan Prayer Times API to retrieve accurate data regarding Ramadan timings. The Aladhan API offers comprehensive information on prayer times.
https://aladhan.com/prayer-times-api


Feel free to modify or structure it according to your preferences!



