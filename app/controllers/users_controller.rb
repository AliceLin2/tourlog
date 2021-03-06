class UsersController < ApplicationController
    skip_before_action :authorize, only: [:create]

    def create
        user = User.create!(user_params)
        user.is_admin = false
        user.save
        session[:user_id] = user.id
        render json: user, status: :created
    end

    def show
        user = User.find_by(id: session[:user_id])
        render json: user, status: :created
    end

    private

    def user_params
        params.permit(:username, :password, :password_confirmation, :email)
    end
end
