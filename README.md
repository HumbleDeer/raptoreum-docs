# Raptorium Docs

- Search will not create indexes until `yarn build` is ran

## Install:

1. yarn

### Dev:

1. yarn start

## Deploy:

1. yarn build
2. yarn serve

## Docker:

Build the container:

```sudo docker build . -t raptor/docs```

Run the container:

```sudo docker run -p 3005:3000 -d raptor/docs```

This will make the applications accessible on port 3005 (via port 3000 inside container).

## Deploy Commands

```bash
# stop/remove old container (replace id)
sudo docker ps
sudo docker stop 4b2bcf907ae4
sudo docker images
sudo docker rmi -f 4b2bcf907ae4

# delete old repo, get new repo, build
cd /home/
rm -fr docs/
git clone https://github.com/Raptor3um/docs.git
cd /docs/
docker build .

# restart container (replace id)
sudo docker run -p 3005:3000 -d f351bb5184ef
```


## To Do:

✅ Compiling guides for Win/Linux/Mac

 □ Finish .webm's for rest of CLI commands

 □ Re-work listed miners

 □ Add mining pool information

