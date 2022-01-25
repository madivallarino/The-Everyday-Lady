class UserSerializer < ActiveModel::Serializer
  attributes :id, :firstName, :lastName, :email, :phoneNumber, :password_digest, :subscribed

  has_one :cart
  has_one :wish_list
  has_many :productjoins
end
