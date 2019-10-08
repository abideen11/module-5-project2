class User < ApplicationRecord
    has_secure_password
    has_many :agreements
    has_many :entrepreneurs, through: :agreements

    validates :username, presence: true, uniqueness: true
end
