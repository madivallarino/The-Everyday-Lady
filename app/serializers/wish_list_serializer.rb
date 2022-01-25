class WishListSerializer < ActiveModel::Serializer
  attributes :id
  
  has_many :wishlist_items
end
