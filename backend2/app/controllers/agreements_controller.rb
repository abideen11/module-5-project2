class AgreementsController < ApplicationController
    def index 
        @agreements = Agreement.all 
        render json: @agreements, only: [:id, entrepreneur_id, :user_id, amount]
    end
    def create
        @agreement = Agreement.new(agreement_params)
        @agreement.user_id = current_user.id
        @agreement.save
        entrepreneur = Entrepreneur.find(agreement_params[:entrepreneur_id])
        entrepreneur.amount = entrepreneur.amount - agreement_params[:amount]
        entrepreneur.save
        render json: @agreement, only: [:id, :entrepreneur_id, :user_id, :amount]
    end

    private
    def agreement_params
        params.require(:agreement).permit(:entrepreneur_id, :amount)
    end
end
