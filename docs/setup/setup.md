[Superguitartab.com](../../README.md) >
[Developer documentation](../README.md) >
Set up

# Local Development Set Up

Here we explain how to set up superguitartab.com on your local machine and get the code running.

---

### Prerequisites

We run this code using docker containers so ensure you have the following installed:
- Docker (latest version)
- docker-compose


---

### Get the code

Clone this repo: `git clone https://github.com/sgmselli/superguitartab.com.git`

---

### Environment variables

Our API, `tabs-api`, needs environment variables to handle production specific variables and secrets. 

An example env file of what variables you need is in `tabs-api/app/.example.env`.

Create a `.env` file in `tabs-api/app` and copy across the variables from `.example.env` and then fill 
out the values for each variable.

---

### Build and run

Our docker compose files are located in `compose` folder the project root. To build and 
run the code:

- Open bash terminal in `compose` folder
- Run `docker compose up --build`

---

### Where the app runs

You can find the app running at:

- (Reverse proxy to frontend) [http://localhost](http://localhost)
- (Reverse proxy to API) [http://localhost/api/](http://localhost/api/)
- (frontend) [http://localhost:3000](http://localhost:3000)
- (API) [http://localhost:8000/api/v1](http://localhost:8000/api/v1)


---




