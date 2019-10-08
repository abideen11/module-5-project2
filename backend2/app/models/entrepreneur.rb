class Entrepreneur < ApplicationRecord
    has_many :agreements
    has_many :users, through: :agreements
end
