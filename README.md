# FC Challenge

About this application:
* has an endpoint that hosts kubernetes deployment information rendered as JSON
* has a page that scans for the values of `whereis.fullcontact.com/description` annotations **(of services only)**
* renders documentation including comments compiled using [rdoc gem](https://github.com/ruby/rdoc)
  * can recreate this documentation locally
* uses [kubeclient](https://github.com/abonas/kubeclient) as Kubernetes API Client library.
* has a corresponding Docker image that can be deployed locally via Helm Chart.

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

## Step 3: Manually Deploy Secrets
*The necessary secrets file is not included in this respository.*

Save a copy of the (separately) provided secrets.yaml file.
Follow these steps:
1. Enter this into the terminal to produce a base64-encoded bearer token: 
```echo $(kubectl describe secret $(kubectl get secrets | grep default | cut -f1 -d ' ') | grep -E '^token' | cut -f2 -d':' | tr -d '\t') | base64```
2. Copy the output into the secrets.yaml file by replacing the value of `bearer_token`
3. Deploy this to Kubernetes: 
```kubectl create -f <path_to>/secrets.yml```

## Step 4: Deploy using the Helm chart
This creates the Service, Deployment, and the Horizontal Pod Autoscaler (hpa).

Within the cloned directory:
```helm init```

*Wait a few minutes for tiller to complete deployment.*
*If you'd like to check the status of the tiller-deploy visit the dashboard by typing `minikube dashboard` into the terminal*

Then, install the locally available chart named "fc-chart":
```helm install fc-chart```

Also, use the following flags to customize installation:
* ```--set replicaCount=<number>```
* ```--set image.repository=<repository>```
* ```--set image.tag=<tag>```

Once this is installed, you can navigate to the
* kubernetes dashboard using `minikube dashboard`
* the application built off of the published image using `minikube service fc-challenge-service`
  * The metrics for this app are located at the '/metrics' endpoint

# Additionally...

## Building a Docker image
The command to build a new docker image out of the current directory with a specified docker repository is  
```docker build -t <repository>:<optional_tag> .```
You're able to run this because of the Dockerfile within this repository.  That file defines how the image is built.

For example, in order to build the images of this application [located here](https://hub.docker.com/r/adrianlara/fc-challenge/tags), I executed:
```docker build -t adrianlara/fc-challenge:v1.8 .```

## The web application's documentation
An instance of the parsed documentation for this app can be found on the actual web app, but if you’d like to compile the docs locally, you’ll need to:
1. clone this repo
2. bundle install
3. run `rdoc` *(note that this will locally replace the docs that are currently in the app)*
