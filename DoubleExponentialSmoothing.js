export default function DoubleExponentialSmoothing(data, alpha, beta) {
  const len = data.length
  const S = Array(len).fill(0)
  const A = Array(len).fill(0)
  const B = Array(len).fill(0)

  S[0] = data[0]
  B[0] = data[1] - data[0]
  for (let t = 1; t < data.length; t++) {
    A[t] = alpha * data[t] + (1 - alpha) * S[t - 1]
    B[t] = beta * (A[t] - A[t - 1]) + (1 - beta) * B[t - 1]
    S[t] = A[t] + B[t]
  }
  return S
}
