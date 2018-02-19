class AnnotationSearchController < ApplicationController

  def service
    presenter = KubePresenter.new

    render json: presenter.annotation("whereis.fullcontact.com/description")
  end

end
