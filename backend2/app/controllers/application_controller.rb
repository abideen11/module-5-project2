class ApplicationController < ActionController::API
    before_action :check_authentication

    def encode_token(payload)
        JWT.encode(payload,"Encryptuser")
    end
    def log_in
        request.headers['Authorization']
    end
    def current_user
        if decode_token
            user_id = decode_token["user_id"]
            # byebug
            User.find(user_id)
           
        end 
    end
    def decode_token
        if log_in
            # byebug
            token = log_in.split(' ')[1]
            # puts `token: #{token}`
            begin
                JWT.decode(token,'Encryptuser')[0]
            rescue JWT::DecodeError
                nil
            end
        end
    end

    def check_authentication
        render json: { error: 'Please log in'}, status: 401 if !logged_in
    end
    def logged_in
        !!current_user
    end
end
