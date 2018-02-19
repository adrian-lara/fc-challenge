class KubePresenter

  def initialize
    create_client
  end

  def services
    client.get_services[0]
  end

  def replicaset
    pods[0]["metadata"]["ownerReferences"]
  end

  def pods
    client.all_entities(namespace: "default")["pod"]
  end

  def services_annotation_values(annotation)
    services_with_annotation(annotation).map do |service|
      name_value = {}
      name_value[service["metadata"]["name"]] = service["metadata"]["annotations"][annotation]
      name_value
    end
  end

  private

    attr_reader :client

    def create_client
      auth_options = { bearer_token: ENV['bearer_token'] }
      ssl_options = { verify_ssl: OpenSSL::SSL::VERIFY_NONE }

      @client = Kubeclient::Client.new('https://192.168.99.100:8443/api/', 'v1', ssl_options: ssl_options, auth_options: auth_options)
    end

    def services_with_annotation(annotation)
      client.get_services.select do |service|
        service.try("metadata").try("annotations").try(annotation)
      end
    end
end
