class User < ApplicationRecord
    has_secure_password

    validates :username, presence: true , uniqueness: true
    validates :password, presence: true , length: { in: 7..11 }

    has_many :events


end

