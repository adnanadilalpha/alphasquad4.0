import Link from 'next/link'
import React from 'react'
import Button from '../../Button'

const GridTwo = () => {
  return (
<>
    <div className="grid-new2">
    <div className="row1">
        <span className="title-row-1">
            Now over Later
        </span>
        <span className="title-row-2">
            Great over Good
        </span>
    </div>
    <div className="cal1">
        <span className="description-cal-1">
            You need a response on the problem now. We understand.
             Hit us up and you’ll get you a response in 5 minutes, not 5 business days.
        </span>
        <span className="description-cal-2">
            Over the years we’ve learned that it’s actually the last 20% that gets you 80% of the results. 
            The difference between good and great.
        </span>
    </div>
</div>
 <div class="line-divide"></div>
<Button />
 </>
  )
}

export default GridTwo