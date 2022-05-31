class StylesController < ApplicationController
    skip_before_action :authorize

    def create
        style = Style.create!(style_params)
        render json: style, status: :created
    end

    def index
        styles = Style.all
        render json: styles
    end

    private

    def style_params
        params.permit(:key, :text, :value, :feature)
    end
    
end
