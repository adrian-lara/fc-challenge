# FC Challenge

About this application:
* renders documentation including comments compiled using [rdoc gem](https://github.com/ruby/rdoc)
  * can recreate this documentation locally
* exports its metrics to Prometheus via service annotation `prometheus.io/scrape: 'true'`
  * also has a "/metrics" endpoint that can be visited by manually appending that uri.
* has an `/aboutthisapp` endpoint that hosts kubernetes deployment information rendered as JSON
  * Note, this information is presented from the general perspective as opposed to as metadata presented from the perspective of the currently used pod. ([Issue #2](https://github.com/adrian-lara/fc-challenge/issues/2))
* has a page that scans for the values of `whereis.fullcontact.com/description` annotations **(of services only)**
* uses [kubeclient](https://github.com/abonas/kubeclient) as Kubernetes API Client library.
* has a corresponding Docker image that can be deployed locally via Helm Chart.
  * Helm Chart deployment can be executed with custom min/max/desired replicas, docker image, and docker tag

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

## Step 3: Deploy using the Helm chart
This creates the Service, Deployment, and the Horizontal Pod Autoscaler (hpa).

Within the cloned directory:
```helm init```

*Wait a few minutes for tiller to complete deployment.*
*If you'd like to check the status of the tiller-deploy visit the dashboard by typing `minikube dashboard` into the terminal*

Then, install the locally available chart named "fc-chart":
```helm install fc-chart```

Also, use the following flags to customize installation:
* ```--set replicaCount=<number>```
* ```--set minReplicas=<number>```
* ```--set maxReplicas=<number>```
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
