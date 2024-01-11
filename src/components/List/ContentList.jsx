import React from 'react'

const ContentList = ({content}) => {
  return (
    <div>
      {
        content.map((c)=>{
            return c;
        })
      }
    </div>
  )
}

export default ContentList
