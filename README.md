# FC Challenge

Features of this application:
* an endpoint that hosts kubernetes deployment information rendered as JSON
* parsed documentation about itself compiled using [rdoc gem](https://github.com/ruby/rdoc)
* a corresponding Docker image that can be deployed locally.

### Setup

#### Tools Needed

* Docker (Edge)
  * With Kubernetes Enabled and Installed
* Minikube
* kubectl
* Helm

## Step 1: Clone Repository
Clone this repository and navigate to it via terminal.

## Step 2: Start Minikube
Run the following command in your terminal:
```minikube start```

## Step 3: A Caveat
*The necessary secrets file is not included in this respository.*

Save a copy of the (separately) provided secrets.yaml file and deploy that to Kubernetes.
After saving the file locally,
```kubectl create -f <path_to>/secrets.yml```

## Step 4: Deploy using the Helm chart
This creates the Service, Deployment, and the Horizontal Pod Autoscaler (hsa).
Within the cloned directory:
```helm init```
*Wait a few minutes for tiller to complete deployment.*
*You can also navigate to the kubernetes dashboard via `minikube dashboard` and check the status of the tiller-deploy*
```helm install fc-chart```

Also, use the following flags to customize installation:
* ```--set replicaCount=<number>```
* ```--set image.repository=<repository>```
* ```--set image.tag=<tag>```

Once this is installed, you can navigate to
* kubernetes dashboard via  `minikube dashboard`
* application built off this applications' published image via `minikube service fc-challenge-service`
  * The metrics for this app are located at the '/metrics' endpoint are rendered in JSON format.

# Additionally...

## Building a Docker image
The command to build a new docker image out of the current directory with a specified docker repository is  
```docker build -t <repository>:<optional_tag> .```
You're able to run this because of the Dockerfile within this repository.  That file defines how the image

For example, in order to build the images of this application [located here](https://hub.docker.com/r/adrianlara/fc-challenge/tags), I typed:
```docker build -t adrianlara/fc-challenge:v1.7 .```

## The web application's documentation
An instance of the parsed documentation for this app can be found on the actual web app, but if you’d like to compile the docs locally, you’ll need to:
1. clone this repo
2. bundle install
3. run `rdoc` *(note that this will locally replace the docs that are currently in the app)*

