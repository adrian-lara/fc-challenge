var search_data = {"index":{"searchIndex":["aboutthisappcontroller","activesupport","annotationsearchcontroller","applicationcable","channel","connection","applicationcontroller","applicationhelper","applicationjob","applicationmailer","bundler","docscontroller","kubepresenter","logger","myapp","application","object","welcomecontroller","index()","index()","index()","new()","pods()","replicaset()","service()","services()","services_annotation_values()","system!()","dockerfile","gemfile","gemfile.lock","readme","rakefile","manifest.js","application.js","cable.js","application.css","fonts.css","rdoc.css","index.html","config.ru","chart.yaml","deployment-and-hpa.yaml","service.yaml","values.yaml","development.log","package.json","node-exporter.yaml","prometheus-configmap.yaml","prometheus-deployment.yaml","404.html","422.html","500.html","apple-touch-icon-precomposed.png","apple-touch-icon.png","favicon.ico","robots","restart"],"longSearchIndex":["aboutthisappcontroller","activesupport","annotationsearchcontroller","applicationcable","applicationcable::channel","applicationcable::connection","applicationcontroller","applicationhelper","applicationjob","applicationmailer","bundler","docscontroller","kubepresenter","logger","myapp","myapp::application","object","welcomecontroller","aboutthisappcontroller#index()","docscontroller#index()","welcomecontroller#index()","kubepresenter::new()","kubepresenter#pods()","kubepresenter#replicaset()","annotationsearchcontroller#service()","kubepresenter#services()","kubepresenter#services_annotation_values()","object#system!()","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""],"info":[["AboutthisappController","","AboutthisappController.html","",""],["ActiveSupport","","ActiveSupport.html","",""],["AnnotationSearchController","","AnnotationSearchController.html","",""],["ApplicationCable","","ApplicationCable.html","",""],["ApplicationCable::Channel","","ApplicationCable/Channel.html","",""],["ApplicationCable::Connection","","ApplicationCable/Connection.html","",""],["ApplicationController","","ApplicationController.html","",""],["ApplicationHelper","","ApplicationHelper.html","",""],["ApplicationJob","","ApplicationJob.html","",""],["ApplicationMailer","","ApplicationMailer.html","",""],["Bundler","","Bundler.html","",""],["DocsController","","DocsController.html","",""],["KubePresenter","","KubePresenter.html","",""],["Logger","","Logger.html","",""],["Myapp","","Myapp.html","",""],["Myapp::Application","","Myapp/Application.html","",""],["Object","","Object.html","",""],["WelcomeController","","WelcomeController.html","",""],["index","AboutthisappController","AboutthisappController.html#method-i-index","()",""],["index","DocsController","DocsController.html#method-i-index","()",""],["index","WelcomeController","WelcomeController.html#method-i-index","()",""],["new","KubePresenter","KubePresenter.html#method-c-new","()",""],["pods","KubePresenter","KubePresenter.html#method-i-pods","()",""],["replicaset","KubePresenter","KubePresenter.html#method-i-replicaset","()",""],["service","AnnotationSearchController","AnnotationSearchController.html#method-i-service","()",""],["services","KubePresenter","KubePresenter.html#method-i-services","()",""],["services_annotation_values","KubePresenter","KubePresenter.html#method-i-services_annotation_values","(annotation)",""],["system!","Object","Object.html#method-i-system-21","(*args)",""],["Dockerfile","","Dockerfile.html","","<p>FROM ruby:2.5.0\n<p>RUN apt-get update -qq &amp;&amp; apt-get install -y build-essential\nlibpq-dev nodejs …\n"],["Gemfile","","Gemfile.html","","<p>source &#39;rubygems.org&#39;\n<p>git_source(:github) do |repo_name|\n\n<pre>repo_name = &quot;#{repo_name}/#{repo_name}&quot; ...</pre>\n"],["Gemfile.lock","","Gemfile_lock.html","","<p>GEM\n\n<pre>remote: https://rubygems.org/\nspecs:\n  actioncable (5.1.5)\n    actionpack (= 5.1.5)\n    nio4r (~&gt; ...</pre>\n"],["README","","README_md.html","","<p>FC Challenge\n<p>Features of this application:\n* an endpoint that hosts kubernetes\ndeployment information ...\n"],["Rakefile","","Rakefile.html","","<p># Add your own tasks in files placed in lib/tasks ending in .rake, # for\nexample lib/tasks/capistrano.rake …\n"],["manifest.js","","app/assets/config/manifest_js.html","","<p>//= link_tree ../images //= link_directory ../javascripts .js //=\nlink_directory ../stylesheets .css …\n"],["application.js","","app/assets/javascripts/application_js.html","","<p>// This is a manifest file that&#39;ll be compiled into application.js,\nwhich will include all the files …\n"],["cable.js","","app/assets/javascripts/cable_js.html","","<p>// Action Cable provides the framework to deal with WebSockets in Rails. //\nYou can generate new channels …\n"],["application.css","","app/assets/stylesheets/application_css.html","","\n<pre>This is a manifest file that&#39;ll be compiled into application.css, which will include all the files\nlisted ...</pre>\n"],["fonts.css","","app/assets/stylesheets/fonts_css.html","","\n<pre>Copyright 2010, 2012 Adobe Systems Incorporated (http://www.adobe.com/),\nwith Reserved Font Name &quot;Source&quot;. ...</pre>\n"],["rdoc.css","","app/assets/stylesheets/rdoc_css.html","","\n<pre>&quot;Darkfish&quot; Rdoc CSS\n$Id: rdoc.css 54 2009-01-27 01:09:48Z deveiant $\n\nAuthor: Michael Granger &lt;ged@FaerieMUD.org&gt; ...</pre>\n"],["index.html","","app/views/aboutthisapp/index_html.html","","<p>&lt;h1&gt;About this app&lt;/h1&gt;\n"],["config.ru","","config_ru.html","","<p># This file is used by Rack-based servers to start the application.\n<p>require_relative &#39;config/environment&#39; …\n"],["Chart.yaml","","fc-chart/Chart_yaml.html","","<p>apiVersion: v1 appVersion: “1.0” description: A Helm chart for Kubernetes\nname: fc-chart version: …\n"],["deployment-and-hpa.yaml","","fc-chart/templates/deployment-and-hpa_yaml.html","","<p>apiVersion: apps/v1 kind: Deployment metadata:\n\n<pre>name: fc-challenge-deployment</pre>\n<p>spec:\n"],["service.yaml","","fc-chart/templates/service_yaml.html","","<p>kind: Service apiVersion: v1 metadata:\n\n<pre>name: fc-challenge-service\nannotations:\n  prometheus.io/scrape: ...</pre>\n"],["values.yaml","","fc-chart/values_yaml.html","","<p>replicaCount: 1 minReplicas: 2 maxReplicas: 10\n<p>image:\n\n<pre>repository: adrianlara/fc-challenge\ntag: v1.8</pre>\n"],["development.log","","log/development_log.html","","<p>Started GET “/” for 172.19.0.1 at 2018-02-15 06:59:10 +0000 Cannot render\nconsole from 172.19.0.1 …\n"],["package.json","","package_json.html","","<p>{\n\n<pre>&quot;name&quot;: &quot;myapp&quot;,\n&quot;private&quot;: true,\n&quot;dependencies&quot;: {}</pre>\n<p>}\n"],["node-exporter.yaml","","prometheus/node-exporter_yaml.html","","<p>apiVersion: v1 kind: Service metadata:\n\n<pre>annotations:\n  prometheus.io/scrape: &#39;true&#39;\nlabels:\n  app: node-exporter ...</pre>\n"],["prometheus-configmap.yaml","","prometheus/prometheus-configmap_yaml.html","","<p>apiVersion: v1 kind: ConfigMap metadata:\n\n<pre>name: prometheus</pre>\n<p>data:\n"],["prometheus-deployment.yaml","","prometheus/prometheus-deployment_yaml.html","","<p>apiVersion: v1 kind: Service metadata:\n\n<pre>annotations:\n  prometheus.io/scrape: &#39;true&#39;\nlabels:\n  name: prometheus ...</pre>\n"],["404.html","","public/404_html.html","","<p>&lt;!DOCTYPE html&gt; &lt;html&gt; &lt;head&gt;\n\n<pre>&lt;title&gt;The page you were looking for doesn&#39;t exist (404)&lt;/title&gt; ...</pre>\n"],["422.html","","public/422_html.html","","<p>&lt;!DOCTYPE html&gt; &lt;html&gt; &lt;head&gt;\n\n<pre>&lt;title&gt;The change you wanted was rejected (422)&lt;/title&gt; ...</pre>\n"],["500.html","","public/500_html.html","","<p>&lt;!DOCTYPE html&gt; &lt;html&gt; &lt;head&gt;\n\n<pre>&lt;title&gt;We&#39;re sorry, but something went wrong (500)&lt;/title&gt; ...</pre>\n"],["apple-touch-icon-precomposed.png","","public/apple-touch-icon-precomposed_png.html","",""],["apple-touch-icon.png","","public/apple-touch-icon_png.html","",""],["favicon.ico","","public/favicon_ico.html","",""],["robots","","public/robots_txt.html","","<p>See www.robotstxt.org/robotstxt.html for documentation on how to use the\nrobots.txt file\n"],["restart","","tmp/restart_txt.html","",""]]}}