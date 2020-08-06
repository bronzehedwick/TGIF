Rails.application.routes.draw do
  root 'homes#index'
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api do 
    namespace :v1 do
      resources :shows, only: [:index, :show]
      resources :episodes, only: [:index, :show]
      resources :weeks, only: [:index, :show]
      resources :program_years, only: [:index, :show, :create, :new]
    end 
  end
end
