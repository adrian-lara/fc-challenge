class AnnotationSearchController < ApplicationController

  def service
    presenter = KubePresenter.new

    @annotation_values = presenter.services_annotation_values("whereis.fullcontact.com/description")
  end

end
