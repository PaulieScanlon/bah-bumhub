import React, { FunctionComponent } from 'react'
import { Box, SxStyleProp } from 'theme-ui'

interface ILogoBrandProps {
  /** Theme UI JSX pragma */
  sx?: SxStyleProp
}

export const LogoBrand: FunctionComponent<ILogoBrandProps> = ({ sx }) => {
  return (
    <Box sx={{ margin: '0 auto', ...sx }}>
      <svg version="1.0" x="0px" y="0px" viewBox="0 0 400 400" width="100%" height="100%">
        <g>
          <path
            d="M381.4,58.3c-5.7-8.2-14.6-9.6-24.9-11.2c-2.9-0.5-5.2-0.9-7.2-1.3c-1.8-0.3-3.3-0.6-4.6-0.8c-16.3-2.5-22.7,6.2-30.2,16.3
		c-0.9,1.3-2,2.7-3.1,4.2c-2.6,3.4-5.1,6.9-7.5,10.4c-0.7-2.5-1.5-5-2.2-7.5c-5.5-19.3-9.4-33.2-30.5-36.5
		c-4.5-0.7-9.7-0.9-16.5-1.3c-7.6-0.4-13.9,2.1-18.4,6.8c-3.8-3.2-8.7-5.2-14.3-5.6c-5.7-0.4-11.3-0.6-16.7-0.7
		c-2.2-0.1-4.4-0.1-6.6-0.2c-0.4,0-0.8,0-1.1,0c-6.7,0-13.6,2.3-18.3,8c-0.7-1-1.5-1.9-2.2-2.6c-2.8-2.8-7.7-6.1-15.8-6.1
		c0,0,0,0,0,0c-3.9,0-7.9,0.1-11.8,0.1c-5.2,0-10.5,0-15.9-0.1c-12.5,0-21.5,8.6-22.4,21.5l-0.1,0.8c0,0.2,0,0.5,0,0.7
		c-4.5-4.8-9.9-8.7-16-11.4c-12.5-5.6-25.8-4.3-35.4-3.3c-3.2,0.3-6.5,0.8-10.1,1.4c-5.5,0.9-11,2.1-16.2,3.2l-4.9,1
		c-16,3.3-22.1,17-19.7,28.9c4,20.2,7.9,40.4,11.8,60.6c3.7,19.1,7.4,38.3,11.2,57.4c1.8,8.9,5.1,14.9,10.4,18.2
		c-3.6,4.1-5.6,9.6-5.7,16.1c-0.2,15.5-0.6,31.3-1,48l-0.5,20.2c0,0.3,0,0.6,0,0.9l0.4,12.5c0.4,12.2,0.9,25.9,1.2,39.6
		c0.3,13.2,9.2,22.3,22,22.6c1.9,0.1,3.8,0.2,5.7,0.3c3.1,0.2,6.3,0.4,9.7,0.4c0.8,0,1.5,0,2.3,0c6.7-0.2,15.9-0.4,22.5-7.5
		c0.8-0.9,1.6-1.8,2.2-2.8c4.4,6.3,11.4,8.9,17.6,9c8.3,0.1,16.7,0.2,25,0.2h1.8c12.2,0,20.9-8.5,21.7-21c0-0.4,0.1-0.9,0.1-1.3
		c12.1,14.3,29.3,23.3,47.3,23.3c1.3,0,2.7,0,4-0.1c28.2-2.1,50.6-23,57-53.2c5.7-26.7,6-101.6,5.7-111.2c8.3,1.3,57,8.4,57.6,8.5
		c0.6,0.1,14.7,0.1,19.6-3.5c5.1-3.7,8.2-9.5,9.3-17.2c3.3-22.5,6.8-45.3,10.2-67.5c2.1-13.4,4.1-26.7,6.1-40.1
		C385.5,74.6,386.8,66.1,381.4,58.3z M151.2,346.6c-0.3,4.3-2,6.1-5.8,6.1c-8.8,0-17.7,0-26.5-0.1c-4.9-0.1-6-3.7-6.2-7.7
		c-0.2-5.3-0.2-10.7-0.3-16c-0.1-3.7-1.8-5.3-5.5-5.8c-17.1-2.3-18.5-1.2-17.9,16.2c0.4,13-0.5,14.2-13,14.6
		c-5.6,0.2-11.2-0.4-16.8-0.6c-4.5-0.1-6.4-2.4-6.5-7.1c-0.5-18.7-1.2-37.3-1.7-52.3c0.6-25.2,1.2-46.8,1.5-68.3
		c0.1-5.4,2.3-7.8,7.3-7.7c6.9,0.1,13.8,0.1,20.7,0.4c4.7,0.2,7.2,2.5,7.2,8c-0.1,18.4,0.1,36.9,0.3,55.3c0.1,8.3,0.9,9.3,9,9.1
		c19.5-0.4,16.3,2.7,16.4-16.7c0-15.5,0.2-31.1,0.2-46.6c0-6.3,2.4-10,9-10.2c7.5-0.2,15.1-0.7,22.6-1.2c1.1-0.1,2.1,0,2.9,0.3
		c-0.4,1.5-0.6,3.1-0.7,4.8l-0.1,0.8c-0.3,4.5-0.6,9-0.8,13.6c-1.4,29.3-1.8,56,6.4,83C152.3,327.7,151.8,337.1,151.2,346.6z
		 M136.2,155.9c0.2-3.5,0-7-0.5-10.5c-1.1-8.1-4-15.7-8.4-22.7c-2.5-18.4-1.9-37.1-1-55.8c0.2-4.7,0.5-9.4,0.8-14.1
		c0.3-4.2,2.2-6.6,6.5-6.6c9.3,0.1,18.5,0.1,27.8,0c4.1,0,5.8,2,5.8,6.1c0,11,0,21.9,0,32.9c-0.1,0-0.1,0-0.2,0
		c0,9.9-0.7,19.8,0.2,29.5c0.6,6.2,2.6,12.7,5.5,18.2c3.3,6.1,9.9,5.1,12.1-1.8c1.8-5.6,2.5-11.8,2.8-17.8c1-19,1.8-38,2.1-57.1
		c0.1-6.6,2.1-9.6,8.4-9.4c7.5,0.3,15.1,0.3,22.6,0.8c4.7,0.4,7.4,2.9,8.2,7.4c-0.1,0.4-0.2,0.9-0.3,1.3c-0.9,4.1-1.8,8.3-2.5,12.6
		c-2.4,13.6-4.7,27.2-7.1,40.7c-3.4,19.8-6.9,39.5-10.4,59.3c-0.2,1.1-0.3,2.1-0.4,3.2c-7.4,7-16.7,11.3-27.1,12
		C163.2,185.7,145.1,174,136.2,155.9z M259.8,312.9c-4.9,23.1-21.5,39.1-42.5,40.6c-20,1.5-40.1-13.1-47.6-34.5c-0.3-1-0.6-2-1-3
		c1.2-32.7,1-62.9-0.7-91.7c-0.1-1.3-0.3-2.7-0.5-4l-0.1-0.9c-0.2-1.2-0.4-2.4-0.7-3.6c0.8-0.3,1.8-0.5,3-0.5
		c9.3,0.1,18.5,0.1,27.8,0c4.1,0,5.8,2,5.8,6.1c0,11,0,21.9,0,32.9c-0.1,0-0.1,0-0.2,0c0,9.9-0.7,19.8,0.2,29.5
		c0.6,6.2,2.6,12.7,5.5,18.2c3.3,6.1,9.9,5.1,12.1-1.8c1.8-5.6,2.5-11.8,2.8-17.8c1-19,1.8-38,2.1-57.1c0.1-6.6,2.1-9.6,8.4-9.4
		c7.5,0.3,15.1,0.3,22.6,0.8c5.5,0.4,8.2,3.7,8.5,9.7C266.7,255.6,265.9,284.4,259.8,312.9z M368.2,82.8
		c-5.4,35.9-11.1,71.7-16.4,107.6c-1,6.7-3.9,8.6-9.9,7.4c-4.2-0.9-8.6-1.1-12.8-1.8c-11.7-2-11.7-2-10-13.8
		c1.9-13.1,3.8-26.3,5.7-39.4c0.3-2.3,0.4-4.7,0.7-8.8c-13,14.7-24.7,28.1-37.6,42.7c-9.9-15-12.3-31.7-19.1-46.3
		c-0.8,0-1.5-0.1-2.3-0.1c-1.3,8.6-2.6,17.1-4,25.7c-1.2,7.4-2.6,14.8-3.7,22.3c-0.7,5.1-3.1,7.7-8.3,6.6
		c-6.8-1.3-13.5-2.6-20.3-3.9c-2.6-0.5-4.3-1.5-5.2-3.1c6.9-8.4,11.9-18.9,14.4-30.8c5.7-26.7,7.5-55.4,5.8-90.3
		c0-0.2,0-0.5-0.1-0.7c0.2-1,0.4-2,0.6-3c0.9-4.6,3.3-6.6,8.2-6.4c25.4,1.3,25.3,1.2,32.5,26.3c3.4,12.1,7.2,24,10.8,36
		c0.2,0.8,0.9,1.5,1.6,2.6c8.6-12.4,16.6-24.7,25.4-36.5c13.7-18.3,9.4-15.5,29.8-12.2C370.7,65.5,370.7,65.9,368.2,82.8z"
          />
          <g>
            <path
              fill="#E260D3"
              d="M50.9,293.7c0.6-25.2,1.2-46.8,1.5-68.3c0.1-5.4,2.3-7.8,7.3-7.7c6.9,0.1,13.8,0.1,20.7,0.4
			c4.7,0.2,7.2,2.5,7.2,8c-0.1,18.4,0.1,36.9,0.3,55.3c0.1,8.3,0.9,9.3,9,9.1c19.5-0.4,16.3,2.7,16.4-16.7c0-15.5,0.2-31.1,0.2-46.6
			c0-6.3,2.4-10,9-10.2c7.5-0.2,15.1-0.7,22.6-1.2c4-0.3,6,1.8,6.5,5.7c0.2,1.3,0.5,2.6,0.5,4c2.4,40.4,1.7,80.8-0.9,121.2
			c-0.3,4.3-2,6.1-5.8,6.1c-8.8,0-17.7,0-26.5-0.1c-4.9-0.1-6-3.7-6.2-7.7c-0.2-5.3-0.2-10.7-0.3-16c-0.1-3.7-1.8-5.3-5.5-5.8
			c-17.1-2.3-18.5-1.2-17.9,16.2c0.4,13-0.5,14.2-13,14.6c-5.6,0.2-11.2-0.4-16.8-0.6c-4.5-0.1-6.4-2.4-6.5-7.1
			C52.1,327.4,51.4,308.7,50.9,293.7z"
            />
            <path
              fill="#E260D3"
              d="M203.1,254.4c0,9.9-0.7,19.8,0.2,29.5c0.6,6.2,2.6,12.7,5.5,18.2c3.3,6.1,9.9,5.1,12.1-1.8
			c1.8-5.6,2.5-11.8,2.8-17.8c1-19,1.8-38,2.1-57.1c0.1-6.6,2.1-9.6,8.4-9.4c7.5,0.3,15.1,0.3,22.6,0.8c5.5,0.4,8.2,3.7,8.5,9.7
			c1.4,29,0.6,57.7-5.5,86.2c-4.9,23.1-21.5,39.1-42.5,40.6c-20,1.5-40.1-13.1-47.6-34.5c-9.5-27-8.7-55-7.4-83
			c0.2-4.7,0.5-9.4,0.8-14.1c0.3-4.2,2.2-6.6,6.5-6.6c9.3,0.1,18.5,0.1,27.8,0c4.1,0,5.8,2,5.8,6.1c0,11,0,21.9,0,32.9
			C203.2,254.4,203.2,254.4,203.1,254.4z"
            />
          </g>
          <polyline points="198.5,54 198.5,54 198.5,54 	" />
          <polyline points="196.8,55.4 196.8,55.4 196.8,55.4 	" />
          <g>
            <path
              fill="#00CFFF"
              d="M119.5,144.9c-0.1-0.3-0.1-0.6-0.2-0.9c-0.1-0.5-0.3-1.1-0.4-1.6c-0.1-0.4-0.2-0.8-0.3-1.1
			c-0.1-0.4-0.3-0.9-0.4-1.3c-0.2-0.4-0.3-0.8-0.5-1.3c-0.1-0.4-1.8-5.7-5.5-9.3c-3.7-3.5-9-5.9-13.1-7.4c-12.7-4.4-23-0.2-27.8,2.5
			c-3,1.7-6.8,0.6-8.5-2.4c-1.7-3-0.6-6.8,2.4-8.5c3-1.7,6.1-3.1,9.3-4.1c-4.5-4.9-11.6-7.5-18.1-6.4c-2.5,0.5-5-1.2-5.4-3.8
			c-0.5-2.6,1.2-5,3.8-5.4c11.5-2,23.9,3.7,29.9,13.6c4.7-0.4,9.5,0,14.1,1.2c0,0,0,0,0,0c0.3-0.3,0.7-0.7,1-1c0,0,0.1-0.1,0.1-0.1
			c0.5-0.6,1-1.1,1.5-1.7c0.1-0.2,0.3-0.4,0.4-0.5c0.2-0.3,0.4-0.5,0.6-0.8c0.3-0.3,0.5-0.7,0.7-1.1c0.2-0.2,0.3-0.5,0.5-0.7
			c0.3-0.5,0.6-0.9,0.8-1.4c0.1-0.2,0.2-0.4,0.3-0.5c0.3-0.6,0.6-1.2,0.9-1.9c3.8-8.3,3.4-18-0.5-26.1c-3.4-7.2-9.4-13.1-16.7-16.4
			c-8.5-3.8-18.3-2.9-27.3-2c-9.9,1-19.8,3.3-29.6,5.3c-7.7,1.6-7.9,7.2-7.3,10.2c7.8,39.3,15.3,78.7,23,118
			c1.7,8.5,2.8,9.3,11.4,7.9c2.9-0.5,5.7-1,8.6-1.5c8.2-1,16.2-3,24.1-5.5c9-2.9,17.9-7.3,23.2-15.5c4.9-7.6,6.5-16.7,5.3-25.6
			C119.8,146.6,119.6,145.8,119.5,144.9z"
            />
            <path
              fill="#00CFFF"
              d="M325.4,134c-13,14.7-24.7,28.1-37.6,42.7c-9.9-15-12.3-31.7-19.1-46.3c-0.8,0-1.5-0.1-2.3-0.1
			c-1.3,8.6-2.6,17.1-4,25.7c-1.2,7.4-2.6,14.8-3.7,22.3c-0.7,5.1-3.1,7.7-8.3,6.6c-6.8-1.3-13.5-2.6-20.3-3.9c-5-0.9-6.6-3.7-5.7-9
			c5.9-33.3,11.6-66.7,17.5-100.1c1.1-6.3,2.6-12.6,3.8-18.9c0.9-4.6,3.3-6.6,8.2-6.4c25.4,1.3,25.3,1.2,32.5,26.3
			c3.4,12.1,7.2,24,10.8,36c0.2,0.8,0.9,1.5,1.6,2.6c8.6-12.4,16.6-24.7,25.4-36.5c13.7-18.3,9.4-15.5,29.8-12.2
			c16.7,2.6,16.7,3,14.2,20c-5.4,35.9-11.1,71.7-16.4,107.6c-1,6.7-3.9,8.6-9.9,7.4c-4.2-0.9-8.6-1.1-12.8-1.8
			c-11.7-2-11.7-2-10-13.8c1.9-13.1,3.8-26.3,5.7-39.4C325,140.5,325.1,138.1,325.4,134z"
            />
            <g>
              <path
                fill="#00CFFF"
                d="M167.1,85.3c0,9.9-0.7,19.8,0.2,29.5c0.6,6.2,2.6,12.7,5.5,18.2c3.3,6.1,9.9,5.1,12.1-1.8
				c1.8-5.6,2.5-11.8,2.8-17.8c1-19,1.8-38,2.1-57.1c0.1-6.6,2.1-9.6,8.4-9.4c7.5,0.3,15.1,0.3,22.6,0.8c5.5,0.4,8.2,3.7,8.5,9.7
				c1.4,29,0.6,57.7-5.5,86.2c-4.9,23.1-21.5,39.1-42.5,40.6c-20,1.5-40.1-13.1-47.6-34.5c-9.5-27-8.7-55-7.4-83
				c0.2-4.7,0.5-9.4,0.8-14.1c0.3-4.2,2.2-6.6,6.5-6.6c9.3,0.1,18.5,0.1,27.8,0c4.1,0,5.8,2,5.8,6.1c0,11,0,21.9,0,32.9
				C167.2,85.3,167.1,85.3,167.1,85.3z"
              />
            </g>
          </g>
          <polyline points="284.5,62 284.5,62 284.5,62 	" />
          <g>
            <path
              fill="#FFFFFF"
              d="M156.3,79.9c0,0-0.1,0-0.1,0c-2.6-0.1-4.6-2.2-4.6-4.8l0.5-21.7c0.1-2.6,2.2-4.7,4.8-4.6
			c2.6,0.1,4.6,2.2,4.6,4.8L161,75.4C160.9,77.9,158.8,79.9,156.3,79.9z"
            />
          </g>
          <polyline points="31.9,62 31.9,62 31.9,62 	" />
          <g>
            <path d="M96.8,171.6c-5.9,1-4.4,10.2,1.5,9.2C104.3,179.8,102.8,170.6,96.8,171.6z" />
            <path d="M98.7,160.2c-4.5,0.8-3.4,7.8,1.2,7.1C104.4,166.5,103.2,159.4,98.7,160.2z" />
            <path d="M106.8,166.6c-4.9,0.8-3.6,8.4,1.3,7.6C112.9,173.3,111.6,165.8,106.8,166.6z" />
          </g>
          <g>
            <g>
              <path
                fill="#FFFFFF"
                d="M77.1,253.8c0,0-0.1,0-0.1,0c-2.6-0.1-4.6-2.2-4.6-4.8l0.5-21.7c0.1-2.6,2.2-4.7,4.8-4.6
				c2.6,0.1,4.6,2.2,4.6,4.8l-0.5,21.7C81.7,251.8,79.6,253.8,77.1,253.8z"
              />
            </g>
            <g>
              <path
                fill="#FFFFFF"
                d="M359.6,68.4c-2.6-0.3-4.9,1.4-5.3,4l-5.1,37.4c-0.3,2.6,1.4,4.9,4,5.3c0.2,0,0.4,0,0.6,0
				c2.3,0,4.3-1.7,4.6-4.1l5.1-37.4C364,71.1,362.2,68.7,359.6,68.4z"
              />
              <path fill="#FFFFFF" d="M352.7,118.5c-6.6-1-8.3,9.3-1.6,10.3C357.7,129.9,359.3,119.5,352.7,118.5z" />
            </g>
            <g>
              <path
                fill="#FFFFFF"
                d="M218.5,102C218.5,102,218.6,102,218.5,102c2.6,0.2,4.9-1.8,5-4.5c0.9-14.1,0.8-28.2-0.3-42.3
				c-0.2-2.7-2.5-4.7-5.1-4.4c0,0-0.1,0-0.1,0c-2.5,0.3-4.4,2.6-4.2,5.1c1,13.7,1.1,27.4,0.2,41C214,99.5,215.9,101.8,218.5,102z"
              />
              <path fill="#FFFFFF" d="M218.7,105.8c-6.5-0.4-7.5,9.7-1,10.4C224.4,117,225.4,106.3,218.7,105.8z" />
            </g>
            <g>
              <path
                fill="#FFFFFF"
                d="M140.9,271.1C140.9,271.1,141,271.1,140.9,271.1c2.6,0.2,4.9-1.8,5-4.5c0.9-14.1,0.8-28.2-0.3-42.3
				c-0.2-2.7-2.5-4.7-5.1-4.4c0,0-0.1,0-0.1,0c-2.5,0.3-4.4,2.6-4.2,5.1c1,13.7,1.1,27.4,0.2,41
				C136.4,268.6,138.3,270.8,140.9,271.1z"
              />
              <path fill="#FFFFFF" d="M141.1,274.9c-6.5-0.4-7.5,9.7-1,10.4C146.8,286.1,147.8,275.3,141.1,274.9z" />
            </g>
            <g>
              <path
                fill="#FFFFFF"
                d="M192.2,249.8c0,0-0.1,0-0.1,0c-2.6-0.1-4.6-2.2-4.6-4.8l0.5-21.7c0.1-2.6,2.2-4.7,4.8-4.6
				c2.6,0.1,4.6,2.2,4.6,4.8l-0.5,21.7C196.8,247.8,194.7,249.8,192.2,249.8z"
              />
            </g>
            <g>
              <path
                fill="#FFFFFF"
                d="M275.3,81.8c-2.1,0.1-4.1-1.2-4.8-3.4l-5.7-19.9c-0.7-2.5,0.7-5.1,3.2-5.8c2.5-0.7,5.1,0.7,5.8,3.2
				l5.7,19.9c0.7,2.5-0.7,5.1-3.2,5.8C276,81.7,275.6,81.8,275.3,81.8z"
              />
            </g>
            <g>
              <g>
                <path
                  fill="#FFFFFF"
                  d="M97,84.7c-1.9,0-3.7-1.1-4.4-3c-7.3-19.1-25.4-14-26.2-13.8c-2.5,0.7-5.1-0.7-5.8-3.2
					c-0.7-2.5,0.7-5.1,3.2-5.8c0.3-0.1,27.2-7.7,37.6,19.4c0.9,2.4-0.3,5.1-2.7,6.1C98.1,84.6,97.6,84.7,97,84.7z"
                />
              </g>
              <g>
                <path fill="#FFFFFF" d="M52.1,61.4c-6.3,1-4.7,10.8,1.6,9.8C60,70.1,58.4,60.3,52.1,61.4z" />
              </g>
            </g>
            <g>
              <path
                fill="#FFFFFF"
                d="M253.2,272.1C253.2,272.1,253.3,272.1,253.2,272.1c2.6,0.2,4.9-1.8,5-4.5c0.9-14.1,0.8-28.2-0.3-42.3
				c-0.2-2.7-2.5-4.7-5.1-4.4c0,0-0.1,0-0.1,0c-2.5,0.3-4.4,2.6-4.2,5.1c1,13.7,1.1,27.4,0.2,41
				C248.7,269.6,250.6,271.8,253.2,272.1z"
              />
              <path fill="#FFFFFF" d="M253.4,275.9c-6.5-0.4-7.5,9.7-1,10.4C259.1,287.1,260.1,276.3,253.4,275.9z" />
            </g>
          </g>
          <polyline points="287.4,219.4 287.4,219.4 287.4,219.4 	" />
        </g>
        <g>
          <path
            fill="#00CFFF"
            d="M352.6,265.8c-0.3,0.3-0.5,0.5-0.8,0.8c13.4,7,24.5,18.9,26.6,34.4c1.2,8.9-0.4,18.1-5.3,25.6
		c-5.3,8.2-14.2,12.7-23.2,15.5c-7.9,2.5-15.9,4.6-24.1,5.5c-2.9,0.5-5.7,1-8.6,1.5c-8.6,1.4-9.7,0.7-11.4-7.9
		c-7.8-39.3-15.3-78.7-23-118c-0.6-3-0.4-8.6,7.3-10.2c9.8-2,19.7-4.3,29.6-5.3c9-0.9,18.8-1.8,27.3,2c7.3,3.3,13.2,9.1,16.7,16.4
		c3.9,8.1,4.3,17.9,0.5,26.1C361.6,258.2,357.6,262.5,352.6,265.8z"
          />
          <g>
            <path d="M355.4,325c-5.9,1-4.4,10.2,1.5,9.2C362.8,333.2,361.3,324,355.4,325z" />
            <path d="M357.2,313.6c-4.5,0.8-3.4,7.8,1.2,7.1C362.9,319.9,361.8,312.8,357.2,313.6z" />
            <path d="M365.3,320c-4.9,0.8-3.6,8.4,1.3,7.6C371.4,326.7,370.2,319.2,365.3,320z" />
          </g>
          <g>
            <g>
              <path
                fill="#FFFFFF"
                d="M355.5,238.1c-1.9,0-3.7-1.1-4.4-3c-7.3-19.1-25.4-14-26.2-13.8c-2.5,0.7-5.1-0.7-5.8-3.2
				c-0.7-2.5,0.7-5.1,3.2-5.8c0.3-0.1,27.2-7.7,37.6,19.4c0.9,2.4-0.3,5.1-2.7,6.1C356.7,238,356.1,238.1,355.5,238.1z"
              />
            </g>
            <g>
              <path fill="#FFFFFF" d="M310.6,214.8c-6.3,1-4.7,10.8,1.6,9.8C318.5,223.5,316.9,213.7,310.6,214.8z" />
            </g>
          </g>
          <path
            d="M394.3,298.8c-1.8-13-8.2-25-18.3-34.5c1-1.7,2-3.5,2.8-5.3c5.6-12.3,5.4-27.1-0.6-39.6c-5.1-10.7-13.8-19.3-24.5-24
		c-12.5-5.6-25.8-4.3-35.4-3.3c-3.2,0.3-6.5,0.8-10.1,1.4c-5.5,0.9-11,2.1-16.2,3.2l-4.9,1c-16,3.3-22.1,17-19.7,28.9
		c4,20.2,7.9,40.4,11.8,60.6c3.7,19.1,7.4,38.3,11.2,57.4c3.4,17,12.5,23.4,29.6,20.5c2.8-0.5,5.5-0.9,8.3-1.4
		c1.6-0.2,3.2-0.4,4.8-0.7c6.7-1.1,13.6-2.8,21.8-5.4c14.8-4.7,25.2-11.9,31.8-22.1C393.3,324.8,396.1,311.8,394.3,298.8z
		 M373.2,326.6c-5.3,8.2-14.2,12.7-23.2,15.5c-7.9,2.5-15.9,4.6-24.1,5.5c-2.9,0.5-5.7,1-8.6,1.5c-8.6,1.4-9.7,0.7-11.4-7.9
		c-7.8-39.3-15.3-78.7-23-118c-0.6-3-0.4-8.6,7.3-10.2c9.8-2,19.7-4.3,29.6-5.3c9-0.9,18.8-1.8,27.3,2c7.3,3.3,13.2,9.1,16.7,16.4
		c3.9,8.1,4.3,17.9,0.5,26.1c-1.8,4-4.2,7.2-7,9.9c-4.7-1.1-9.4-1.5-14.1-1.2c-6.1-9.9-18.4-15.6-29.9-13.6
		c-2.6,0.5-4.3,2.9-3.8,5.4c0.5,2.5,2.9,4.3,5.4,3.8c6.5-1.2,13.6,1.5,18.1,6.4c-3.2,1-6.3,2.3-9.3,4.1c-3,1.7-4,5.5-2.4,8.5
		c1.7,3,5.5,4,8.5,2.4c6.3-3.6,22.8-10.2,40.9,4.9c0.2,0.2,0.5,0.4,0.8,0.5c3.6,5.2,6.1,11.1,7,17.7
		C379.7,309.8,378.1,319,373.2,326.6z"
          />
        </g>
      </svg>
    </Box>
  )
}