
export enum DateFormate {
  YYMMDD = 'YYMMDD'
}

export function formatDate(timeStamp: number, formate: DateFormate = DateFormate.YYMMDD): string {
  if (typeof timeStamp !== 'number') {
    throw new TypeError(`your give ${timeStamp} is not number`)
  }
  const date = new Date(timeStamp)
  let format: string
  if (formate === DateFormate.YYMMDD) {
    format = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
  }
  return format
}

