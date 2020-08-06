class Api::V1::ShowsController < ApplicationController  
  def index
    @shows = Show.all
    render json: { showData: @shows }
  end
end