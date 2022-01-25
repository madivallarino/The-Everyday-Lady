class CartItemSerializer < ActiveModel::Serializer
  attributes :id, :name, :quantity, :price, :size, :image

  belongs_to :cart
end
