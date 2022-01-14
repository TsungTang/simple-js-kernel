import science from "science"
import { range } from "./utils/index.js"

const kernel = (data, from = null, to = null, step = 0.01) => {
  const max = to ? to : Math.max(...data)
  const min = from ? from : Math.min(...data)

  const bandwidth = science.stats.bandwidth.nrd0(data)
  const kde = science.stats.kde().sample(data)
  const res = kde.bandwidth(bandwidth)(range(min, max, step))
  return {
    res: res,
    x: res.map((r) => r[0]),
    y: res.map((r) => r[1]),
    obs: res.length,
    bandwidth: bandwidth,
  }
}

export default kernel
