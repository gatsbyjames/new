import React from 'react'
import { Spinner } from 'react-bootstrap'

function Loader() {
  return (
    <Spinner
        animation='border'
        role='status'
        style={{
            height: '100px',
            width: '100px',
            margin: 'auto',
            display: 'block' // 얘 block 이라고 오타 치니까 센터 말고 왼쪽 상단에 뜸
        }}
    >
        <span className='sr-only'>Loading...</span>
    </Spinner>
  )
}

export default Loader