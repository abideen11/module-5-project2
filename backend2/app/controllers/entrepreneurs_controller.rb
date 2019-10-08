class EntrepreneursController < ApplicationController
    skip_before_action :check_authentication

    def index
        @entrepreneurs = Entrepreneur.all 
        render json: @entrepreneurs, only: [:id, :name, :country, :continent, :reason, :amount]
    end
    def show
        @entrepreneur = Entrepreneur.find(params[:id])
        render json: @entrepreneurs, only: [:id, :name, :country, :continent, :reason, :amount]
    end
end
