import React from 'react'

function withExtraProp(WrappedComponent) {
    return function EnhencedComponent(props) {
        return <WrappedComponent {...props} extraPop="I am an extra prop!" />
    }
}

const HigherOrder = (props) => {
  return (
    <div>
      {props.extraPop}
    </div>
  )
}
const EnhencedComponent=withExtraProp(HigherOrder);
export default HigherOrder
