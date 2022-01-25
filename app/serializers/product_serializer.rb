class ProductSerializer < ActiveModel::Serializer
  attributes :id, :name, :image, :backimage, :size, :color, :category, :desc, :subtype, :price

  has_many :productjoins
  has_many :reviews
end
