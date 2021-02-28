import * as React from 'react'

function SvgFacebookSquare(props) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 22 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#facebook-square_svg__clip0)">
        <path
          d="M19.643 1.5H2.357c-.625 0-1.225.237-1.667.659A2.2 2.2 0 000 3.75v16.5a2.2 2.2 0 00.69 1.591 2.416 2.416 0 001.667.659h6.74v-7.14H6.003V12h3.094V9.439c0-2.914 1.817-4.523 4.6-4.523 1.333 0 2.726.227 2.726.227v2.86h-1.535c-1.513 0-1.985.896-1.985 1.815V12h3.377l-.54 3.36h-2.837v7.14h6.74c.625 0 1.225-.237 1.667-.659A2.2 2.2 0 0022 20.25V3.75a2.2 2.2 0 00-.69-1.591 2.415 2.415 0 00-1.667-.659z"
          fill="#fdfdfd"
        />
      </g>
      <defs>
        <clipPath id="facebook-square_svg__clip0">
          <path fill="#fff" d="M0 0h22v24H0z" />
        </clipPath>
      </defs>
    </svg>
  )
}

export default SvgFacebookSquare
