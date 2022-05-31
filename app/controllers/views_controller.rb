class ViewsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    skip_before_action :authorize

    def index
        views = View.all
        render json: views
    end

    def show
        view = View.find(params[:id])
        render json: view
    end

    def create
        view = View.create!(view_params)
        render json: view, status: :created
    end

    def update
        view = View.find(params[:id])
        view.update(view_params)
        render json: view
    end

    def destroy
        view = View.find(params[:id])
        view.destroy
        head :no_content
    end

    def sort
        views = View.all.order("ticket")
        render json: views
    end

    private

    def view_params
        params.permit(:ticket, :hour, :overview, :scene, :city_id, :view_image)
    end
    
    def render_not_found_response
        render json: {error: "View not found"}, status: :not_found
    end
end
