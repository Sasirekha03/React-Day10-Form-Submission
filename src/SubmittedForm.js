import React from 'react'

function SubmittedForm({formValues}) {
  return (
    <div>
        <h3>
            name:{formValues.map(t=><h1>{t}</h1>)};
        </h3>
    </div>
  )
}

export default SubmittedForm