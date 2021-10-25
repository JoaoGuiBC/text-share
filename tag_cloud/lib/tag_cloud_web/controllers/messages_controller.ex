defmodule TagCloudWeb.MessagesController do
  use TagCloudWeb, :controller

  def create(conn, params) do
    IO.inspect(params)

    conn
    |> text("Recebi a requisição")
  end
end
