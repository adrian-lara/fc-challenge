Rails.application.routes.draw do
  get '/', to: 'welcome#index'
  get '/aboutthisapp', to: 'aboutthisapp#index'
  get '/*doc_page', to: 'docs#index'
end
