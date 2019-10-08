class Agreement < ApplicationRecord
    belongs_to :entrepreneur
    belongs_to :user
end
