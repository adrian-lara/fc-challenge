Rails.application.routes.draw do
  get '/', to: 'welcome#index'

  get '/aboutthisapp', to: 'aboutthisapp#index'

  get '/service-annotation-search', to: 'annotation_search#service'

  get '/docs/*doc_page', to: 'docs#index'
end
