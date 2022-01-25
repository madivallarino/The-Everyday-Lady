class CartsController < ApplicationController

    def show
        cart = Cart.find_by(id: session[:cart_id])
        render json: cart, include: :cart_items, status: :ok
    end

    def purchased 
        cart = Cart.find_by(id: params[:id])
        cart.update(purchased: params[:purchased])
        session.delete :cart_id
        newcart = Cart.create(user_id: session[:user_id])
        session[:cart_id] = newcart.id
    end

    def purchasedcarts
        carts = Cart.where(purchased: true, user_id: params[:id])
        render json: carts, status: :ok
    end

    def discount
        cart = Cart.find_by(id: params[:id])
        cart.update(discount: params[:discount])
        render json: cart, status: :ok
    end
end
