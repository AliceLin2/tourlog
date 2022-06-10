class CitiesController < ApplicationController
    skip_before_action :authorize
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    
    def create
        city = City.create!(city_params)
        render json: city, status: :created
    end

    def index
        cities = City.all
        render json: cities
    end

    def show
        city = City.find(params[:id])
        render json: city
    end

    private

    def city_params
        params.permit(:name, :country, :area)
    end
   
    def render_not_found_response
        render json: {error: "City not found"}, status: :not_found
    end
end
