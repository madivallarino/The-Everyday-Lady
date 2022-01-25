class CreateReviews < ActiveRecord::Migration[6.1]
  def change
    create_table :reviews do |t|
      t.string :review
      t.belongs_to :product
      t.integer :star_rating
      
      t.timestamps
    end
  end
end
