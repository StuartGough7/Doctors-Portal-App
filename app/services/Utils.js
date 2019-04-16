import uuidv4 from 'uuid/v4'

export const generateRandomId = () => uuidv4()

export const calculateDate = (timestamp) => {
  const DatObj = new Date(parseInt(timestamp, 10))
  const Month = _monthSwitch(DatObj.getMonth())
  return { Date: DatObj.getDate(), Month: Month, Year: DatObj.getUTCFullYear() }
}

const _monthSwitch = (number) => {
  switch (number) {
    case 0:
      return 'Jan'
    case 1:
      return 'Feb'
    case 2:
      return 'Mar'
    case 3:
      return 'Apr'
    case 4:
      return 'May'
    case 5:
      return 'Jun'
    case 6:
      return 'Jul'
    case 7:
      return 'Aug'
    case 8:
      return 'Sep'
    case 9:
      return 'Oct'
    case 10:
      return 'Nov'
    case 11:
      return 'Dec'
    default:
      return 'Jan'
  }
}
