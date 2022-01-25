class CartSerializer < ActiveModel::Serializer
  attributes :id, :purchased, :discount

  has_many :cart_items
end
