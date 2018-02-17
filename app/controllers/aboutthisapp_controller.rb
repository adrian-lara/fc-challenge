class AboutthisappController < ApplicationController

  def index
    presenter = KubePresenter.new()

    render json: {
      service: presenter.services,
      replicaset: presenter.replicaset,
      pods: presenter.pods
    }
  end

end
