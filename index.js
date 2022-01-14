import data from "./data/index.js"
import kernel from "./kernel.js"
import DoubleExponentialSmoothing from "./DoubleExponentialSmoothing.js"
const res = kernel(data)
console.log(res)

const res = DoubleExponentialSmoothing(data, 0.01, 0.07)
console.log(res)
