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
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  return sourceArray.reduce(reducer)
}

const reduceToAllTrue = (sourceArray) => {
  return sourceArray.reduce((a,b) => a === b)
}

const reduceToAnyTrue = (sourceArray) => {
  
}
