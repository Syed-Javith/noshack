import React from 'react'

const List = ({list}) => {
  return (
    <div>
        <ol>
      {
        list.map((l) => {
            return <>{l}</>;
        })
      }
      </ol>
    </div>
  )
}

export default List
