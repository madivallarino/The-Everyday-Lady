class UsersController < ApplicationController
   

    skip_before_action :authorize, only: [:create, :index]  
   
    def create
        user = User.create!(user_params)
        session[:user_id] = user.id
        render json: user, status: :created
    end
 
    def index  
        render json: User.all, status: :ok
    end
 
    def show
        render json: @current_user, status: :ok
    end

    # def update
    #     user = User.find_by(id: params[:id])
    #     user.update(params[:params])
    # end

    private
 
    def user_params
        params.permit(:firstName, :lastName, :email, :password, :password_confirmation)
    end
 
    def unprocessable_entity_response(invalid)
        render json: {error: "invalid.record.errors.full_messages"}, status: :unprocessable_entity
    end
end
