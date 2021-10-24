defmodule TagCloud.Repo do
  use Ecto.Repo,
    otp_app: :tag_cloud,
    adapter: Ecto.Adapters.Postgres
end
