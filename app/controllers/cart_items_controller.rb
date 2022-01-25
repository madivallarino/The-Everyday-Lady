class CartItemsController < ApplicationController


    def create 
        item = CartItem.create(price: params[:price], name: params[:name], quantity: params[:quantity], image: params[:image], cart_id: session[:cart_id])
        render json: item, status: :created
    end

    def delete
        item = CartItem.find_by(id: params[:id])
        item.destroy
    end
end
