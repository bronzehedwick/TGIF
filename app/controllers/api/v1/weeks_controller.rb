class Api::V1::WeeksController < ApplicationController  
  def index
    @weeks = Week.all
    render json: { weekData: @weeks }
  end
end