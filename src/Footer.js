import { Page } from '@geist-ui/react'
import React from 'react'

const Footer = () => {
  return (
    <Page.Footer>     
        <ul className="menu menu-horizontal">
        <div className="flex justify-center items-center text-sm">
            <div>
            An experiment by {" "}
            <a
                href="https://github.com/uok825"
                target="_blank"
                rel="noreferrer"
                className="underline underline-offset-2"
            >
                @uok825 <span>  </span>
            </a>
            & {" "}
            <a
                href="https://github.com/orkunkilic"
                target="_blank"
                rel="noreferrer"
                className="underline underline-offset-2"
                >
                @orkunkilic
                </a>
            </div> 
        </div>
        </ul>
    </Page.Footer>
  )
}

export default Footer