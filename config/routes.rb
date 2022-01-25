Rails.application.routes.draw do
  resources :cart_items
  resources :carts
  resources :wishlist_items
  resources :wish_lists
  resources :reviews
  resources :products
  resources :users

  post "/login", to: "sessions#create"
  post "/signup", to: "users#create"
  get "/me", to: "users#show"
  delete "/logout", to: "sessions#destroy"
end
