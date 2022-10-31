# Raptoreum Docs

This repository holds the Docusaurus instance that hosts the Raptoreum Docs (https://docs.raptoreum.com). Development is also done here.

## Contributors

Contributors are always welcome to help us out with anything they can. If you're not proficient in using code or development software, bring us a visit on Discord! (discord.gg/raptoreum). You can help us in other ways that don't require coding skills. :)

## Notes for developers

### Commands used for Docusaurus building & local deployment

- Build local files: `yarn build` (equivalent to `yarn docusaurus build`)
  Builds the current instance and leaves the built files in `/build/`
- Host local files: `yarn serve` (equivalent to `yarn docusaurus serve`)
  Opens a webserver on port 3000

Search will not create indexes until `yarn build` is ran.

A **Docker image** can be built directly from this repository's source. When doing so, the above commands are executed automatically. Note this may take some time to finish.

### Requirements:

1. NodeJS
2. Yarn (Package Manager)
3. Visual Studio Code
4. Docker / Docker Desktop (optional, dev containers)

## Docker image building

1. To build the Docker image, start off by cloning this repository to a directory of your choosing:

   `sudo git clone https://github.com/Raptor3um/docs`

2. Navigate to the cloned repository's root directory.
3. Build the container:

   `sudo docker build . -t raptor/docs`

4. Run the container:

   `sudo docker run -p -d raptor/docs`
   - -p opens the ports specified in the Dockerfile
   - -d specifies detatched 

This will make the applications accessible on port 3000 (localhost or otherwise)