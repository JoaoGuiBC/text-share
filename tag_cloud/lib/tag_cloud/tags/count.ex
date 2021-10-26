defmodule TagCloud.Tags.Count do
  import Ecto.Query

  alias TagCloud.Messages.Get

  def call do
    Get.today_messages()
    |> Task.async_stream(fn message -> count_words(message.message) end)
    |> Enum.reduce(%{}, fn element, acc -> sum_values(element, acc) end)
  end

  defp count_words(message) do
    message
    |> String.split()
    |> Enum.frequencies()
  end

  defp sum_values({:ok, map1}, map2) do
    Map.merge(map1, map1, fn _key, value1, value2 -> value1 + value2 end)
  end
end
