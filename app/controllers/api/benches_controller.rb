class Api::BenchesController < ApplicationController
  def index
    # @benches = Bench.all
    @benches = Bench.in_bounds(params["south"], params["west"], params["north"],
                                params["east"])
  end

  def create
    @bench = Bench.new(bench_params)
    if @bench.save
      @benches = Bench.all
      render :index
    else
      render json: @bench.errors.full_messages, status: 422
    end
  end

  def bench_params
    params.require(:bench).permit(:description, :lat, :lng, :seating)
  end
end
