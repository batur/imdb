export function sortAsc(arr, field) {
  return arr.sort(function (a, b) {
    if (a[field] > b[field]) return 1

    if (b[field] > a[field]) return -1

    return 0
  })
}

export function sortDesc(arr, field) {
  return arr.sort(function (a, b) {
    if (a[field] > b[field]) return -1

    if (b[field] > a[field]) return 1

    return 0
  })
}
