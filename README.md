<h1 align ="center"> Launching our Nodejs image </h1>
<br>

### To compile our code:

`$ npm run build`

### To raise the server:

`$ npm run dev`

### To create our image:

`$ docker-compose build`

### To create our container:

`$ docker-compose up -d`
<br>


<h1 align ="center"> For the production version we create a file named docker-compose.prod.yml</h1><br>

 * This file is used to overwrite some commands we have in our docker-compose base when we run the production command, so we can run different working environments.
    <br>

* When we run the production command, docker will run the entire Dockerfile, run the base, production, compile our app, and after it's all done it will run the docker-compose-prod.yml command: `$ node build/index.js` to start our production build application.
<br>


### We can create a Makefile to map the commands that we will use
<br>

* This command is for development mode `$ docker-compose up -d` we will use:
<br>
    - `$ make up`
<br>

 * This command is to close our containers `$ docker-compose down` we will use:
<br>
    - `$ make down`
<br>

* To start the app with our docker-compose-prod.yml we run the following command. The -f tells you the file we want to run `$ docker-compose -f docker-compose.yml -f docker-compose.prod.yml up -d` we will use:
<br>

    - `$ make up-prod`

<br>


#### If you want to download the image [Link.](https://hub.docker.com/r/jaug/node-ts-node/)<span aria-hidden="true" class="line-numbers-rows">