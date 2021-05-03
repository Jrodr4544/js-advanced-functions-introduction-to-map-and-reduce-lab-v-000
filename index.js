// Your code here
const mapToNegativize = (sourceArray) => {
  return sourceArray.map( x => x * -1 )
}

const mapToNoChange = (sourceArray) => {
  return sourceArray.map( x => x )
}

const mapToDouble = (sourceArray) => {
  return sourceArray.map( x => x * 2 )
}

const mapToSquare = (sourceArray) => {
  return sourceArray.map( x => x * x )
}

const reduceToTotal = (sourceArray) => {
  const total = (sum, value) => sum + value;
  return sourceArray.reduce(total, value)
}

const reduceToAllTrue = (sourceArray) => {
  return sourceArray.reduce((a,b) => a === true ? true : false)
}

const reduceToAnyTrue = (sourceArray) => {
  
}
