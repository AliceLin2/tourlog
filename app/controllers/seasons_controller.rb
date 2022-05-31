class SeasonsController < ApplicationController
    skip_before_action :authorize

    def index
        seasons = Season.all
        render json: seasons
    end
end
