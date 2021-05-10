# coc-base-cloud-function

## Table of Contents

- [About](#about)
- [Getting Started](#getting_started)
- [Usage](#usage)
- [Contributing](../CONTRIBUTING.md)

## About <a name = "about"></a>

Appwrite Cloud Function for COC Base Layouts App

## Getting Started <a name = "getting_started"></a>

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See [deployment](#deployment) for notes on how to deploy the project on a live system.

### Prerequisites

What things you need to install the software and how to install them.

```
Appwrite
appwrite-cli
node.js
```

### Installing Dependency

A step by step series of examples that tell you how to get a development env running.

```
npm install node-appwrite --save
```

End with an example of getting some data out of the system or using it for a little demo.

## Usage <a name = "usage"></a>

To run cloud function locally
```
docker run --rm --volume $(pwd):/usr/local/src:rw \
    --env MY_VALUE1="Hello World 1" \
    --env MY_VALUE2="Hello World 2" \
    appwrite/env-node-15.5:1.0.0 \
    node index.js
```
To deploy on Appwrite
```
appwrite functions createTag \
    --functionId=6012cc93d5a7b \
    --command="node index.js" \
    --code="/myrepo/myfunction"
```