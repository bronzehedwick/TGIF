class Api::V1::EpisodesController < ApplicationController  
  def index
    @episodes = Episode.all
    render json: { episodeData: @episodes }
  end

  def show
  # binding.pry
  @episodes = Show.find(params[:id]).episodes
  # binding.pry
  render json: { episodeData: @episodes }
  end
end