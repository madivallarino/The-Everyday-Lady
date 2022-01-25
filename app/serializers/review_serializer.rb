class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :review, :star_rating

  belongs_to :product
end
