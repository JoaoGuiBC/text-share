defmodule TagCloudWeb.MessagesView do
    use TagCloudWeb, :view

    def render("create.json", %{message: message}) do
      %{
        result: "Created message.",
        message: message
      }
    end
end
