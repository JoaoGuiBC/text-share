defmodule TagCloud.Application do
  # See https://hexdocs.pm/elixir/Application.html
  # for more information on OTP Applications
  @moduledoc false

  use Application

  @impl true
  def start(_type, _args) do
    children = [
      # Start the Ecto repository
      TagCloud.Repo,
      # Start the Telemetry supervisor
      TagCloudWeb.Telemetry,
      # Start the PubSub system
      {Phoenix.PubSub, name: TagCloud.PubSub},
      # Start the Endpoint (http/https)
      TagCloudWeb.Endpoint,
      # Start a worker by calling: TagCloud.Worker.start_link(arg)
      # {TagCloud.Worker, arg}
      TagCloud.Scheduler
    ]

    # See https://hexdocs.pm/elixir/Supervisor.html
    # for other strategies and supported options
    opts = [strategy: :one_for_one, name: TagCloud.Supervisor]
    Supervisor.start_link(children, opts)
  end

  # Tell Phoenix to update the endpoint configuration
  # whenever the application is updated.
  @impl true
  def config_change(changed, _new, removed) do
    TagCloudWeb.Endpoint.config_change(changed, removed)
    :ok
  end
end
