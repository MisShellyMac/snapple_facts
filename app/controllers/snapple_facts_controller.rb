class SnappleFactsController < ApplicationController
  def search
    begin
      id = params[:fact]
      # Return an array with the single fact so the JavaScript can process
      # this the same way as other cases when multiple facts are produced
      data = [ SnappleFact.find(id) ]
      code = :ok
    rescue
      data = {}
      code = :no_content
    end

    render json: data.as_json, status: code
  end

  def random
    begin
      all_facts = SnappleFact.all
      # Return an array with the single fact so the JavaScript can process
      # this the same way as other cases when multiple facts are produced
      data = [ all_facts.sample ]
      code = :ok
    rescue
      data = {}
      code = :no_content
    end

    render json: data.as_json, status: code
  end

  def all
    begin
      data = SnappleFact.all
      code = :ok
    rescue
      data = {}
      code = :no_content
    end

    render json: data.as_json, status: code
  end
end
