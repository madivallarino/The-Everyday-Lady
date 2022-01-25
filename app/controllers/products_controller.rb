class ProductsController < ApplicationController

    
    def index 
        products = Product.all
        render json: products
    end

    def home
        products = Product.where(category: "home")
        render json: products
    end

    def clothing
        products = Product.where(category: "lifestyle")
        render json: products
    end

    def giftcard
        products = Product.where(category: "giftcard")
        render json: products
    end
end
