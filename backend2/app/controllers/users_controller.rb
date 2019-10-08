class UsersController < ApplicationController
    skip_before_action :check_authentication, only: [:create]

    def create
        @user = User.new(user_params)
        # byebug
        if @user.valid?
            @user.save
            render json: @user
        else 
            # flash[:error] = "Invalid username or password"
        end 
        # byebug
    end
end
