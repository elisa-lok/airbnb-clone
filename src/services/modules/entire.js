import hyRequest from "..";

export function getEntireRoomList(offset = 0, limit = 20) {
  return hyRequest.get({
    url: "entire/list",
    params: {
      offset,
      limit
    }
  })
}