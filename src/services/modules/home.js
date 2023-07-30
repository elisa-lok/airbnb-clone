
import hyRequest from '..'

export function getHomeGoodPriceData() {
  return hyRequest.get({
    url: '/home/goodPrice',
  })
}

export function getHomeHighScoreData() {
  return hyRequest.get({
    url: '/home/highScore',
  })
}

export function getHomeDiscountData() {
  return hyRequest.get({
    url: '/home/discount',
  })
}