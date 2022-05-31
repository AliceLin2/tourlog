class SeasonCitiesController < ApplicationController
    skip_before_action :authorize

    def create
        season_city = SeasonCity.create!(season_city_params)
        render json: season_city, status: :created
    end

    private

    def season_city_params
        params.permit(:season_id, :city_id)
    end
end
