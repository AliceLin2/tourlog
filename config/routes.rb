Rails.application.routes.draw do
  default_url_options :host => "localhost:3000"

  resources :style_cities, only: [:create]
  resources :season_cities, only: [:create]
  resources :seasons, only: [:index]
  resources :views
  resources :styles, only: [:create, :index]
  resources :cities, only: [:create, :index, :show]
  resources :comments, only: [:create, :index, :update, :destroy]

  post "/signup", to: "users#create"
  get "/me", to: "users#show"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  get "/sort", to: "views#sort"
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
