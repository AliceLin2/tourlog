class StyleCitiesController < ApplicationController
    skip_before_action :authorize

    def create
        style_city = StyleCity.create!(style_city_params)
        render json: style_city, status: :created
    end

    private

    def style_city_params
        params.permit(:style_id, :city_id)
    end
end
