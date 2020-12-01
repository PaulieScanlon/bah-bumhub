import React, { FunctionComponent } from 'react'
import { Box, SxStyleProp } from 'theme-ui'

interface IMistletoeProps {
  /** Theme UI JSX pragma */
  sx?: SxStyleProp
}

export const Mistletoe: FunctionComponent<IMistletoeProps> = ({ sx }) => {
  return (
    <Box sx={{ margin: '0 auto', ...sx }}>
      <svg version="1.0" x="0px" y="0px" viewBox="0 0 113 67" width="100%" height="100%">
        <g>
          <g>
            <path
              fill="#009169"
              d="M44.5,40.8c0.1,0,0.3-0.1,0.4-0.2c0.2-0.1,0.3-0.2,0.4-0.4l0.2-0.3c0-0.1,0.1-0.3,0.1-0.4
			c0-0.2,0-0.4-0.1-0.6c0-0.2-0.1-0.4-0.3-0.5c0,0,0,0,0,0c0-0.1-0.1-0.2-0.2-0.2c0,0-0.1-0.1-0.1-0.1c0,0,0,0-0.1-0.1
			c0,0,0-0.1-0.1-0.1c0.1-0.1,0.1-0.3,0.1-0.5c0.4-3,0.7-6,0.5-9.1c-0.1-3.1-0.7-6.1-1.6-9.1c-0.7-2.4-2.6-4.8-5.4-3.9
			c-0.8,0.3-1.5,0.8-2,1.4c-0.8-1.7-1.6-3.3-2.4-4.9c-1.4-2.8-2.7-6.6-5.6-8.2c-3-1.6-7,0.1-7.2,3.7c-0.1,1.6,0.5,3.2,0.6,4.8
			c0,0.3,0.1,0.7,0.1,1c-1.9-1.3-3.9-2.5-6-3.6C12.8,7.9,7.7,5.3,4.3,7.8c-2.1,1.5-1.5,4,0.3,5.4c1.7,1.4,3.5,2.7,5.3,4.1
			c2.1,1.7,4.3,3.4,6.4,5.1c-1.8,0.2-3.6,0.4-5.5,0.6c-1.6,0.2-3.5,0.1-4.8,1.1c-1.3,1-1.7,2.8-1.1,4.3c1.2,3,5.6,3.6,8.3,4.5
			c1.8,0.6,3.7,1.1,5.5,1.7c-0.5,0.7-0.9,1.5-1,2.4c-0.5,3.1,2.1,5.3,5,5.5c3.1,0.2,6.3-0.5,9.3-0.8c3.4-0.4,6.7-0.8,10.1-1.2
			c0.1,0,0.2,0,0.3-0.1c0.1,0,0.1,0,0.2,0.1c0.1,0.1,0.3,0.1,0.4,0.1c0,0,0,0,0,0c0,0,0.1,0,0.1,0.1l0,0c0.1,0,0.2,0,0.3,0.1
			c0,0,0,0,0.1,0c0.1,0,0.3,0.1,0.4,0.1C44.1,40.9,44.3,40.9,44.5,40.8z"
            />
            <path
              fill="#009169"
              d="M87.5,43c1.1-1.6,1.1-3.9,0.1-5.6c-0.9-1.6-2.4-2.7-4-3.4c1.2-0.3,2.5-0.6,3.7-0.9
			c1.8-0.4,3.5-0.9,5.3-1.4c1.4-0.4,3.1-0.7,4.4-1.5c2.5-1.5,2-4.1-0.1-5.6c1.2-0.7,2.3-1.3,3.4-2.1c2.9-1.9,7-4.2,7.7-7.9
			c0.1-0.3,0-0.7-0.1-1c0.2-1.3-0.2-2.6-1.4-3.5c-1.6-1.2-3.7-1-5.6-0.6c-2.3,0.5-4.6,1.1-6.8,1.9c-1.9,0.7-3.8,1.5-5.5,2.4
			c0.3-0.7,0.5-1.3,0.8-2c0.8-2-1.3-4.2-3.4-3.3c-5.5,2.5-10.3,6.6-14,11.4c-0.2-1.3-0.2-2.6-0.2-3.9c0.1-2.3-2.2-3.6-4.1-2.3
			c-3,2.1-4.5,5.6-5.6,9c-1.5,4.1-3,8.2-3.6,12.5c-0.1,0.5,0.2,1,0.5,1.3c0.2,0.3,0.4,0.5,0.7,0.7c1.6,1.1,3.2,2,4.5,3.5
			c1.3,1.4,2.2,3.4,4,4.2c2,0.8,4.6,0.4,6.7,0.4c2.3,0,4.6-0.1,7-0.2C84.1,45.1,86.3,44.8,87.5,43z"
            />
            <path
              fill="#F30202"
              d="M61,59.5c1.5-0.8,2.6-1.9,3.3-3.3c0.4-0.3,0.7-0.8,0.9-1.3c2.6-6.3,1.2-13.4-4-17.9
			c-0.4-0.4-0.9-0.7-1.4-1.1c-0.6-1.3-1.6-2.4-2.8-3.2c-3.8-2.5-7.3-0.5-10,2.3c-1.5,1-2.8,2.5-3.5,4.7c-0.2,0.6-0.2,1.2-0.1,1.8
			c-1.4,0.4-2.7,0.9-4,1.9c-1.9,1.6-3.2,4.1-3.4,6.6c-0.6,5.6,3.7,10.1,8.9,11.2C50.4,63.1,57.8,62.6,62,60.5z"
            />
            <path fill="#FF4949" d="M54.9,52.5c-0.6-4.4-7.5-3.4-6.9,1C48.7,58,55.6,57,54.9,52.5z" />
            <path fill="#FF4949" d="M46.7,51.9c-0.5-3.2-5.4-2.5-4.9,0.7C42.2,55.8,47.1,55.1,46.7,51.9z" />
          </g>
          <g>
            <g>
              <path
                d="M54,45.8c1.4,0.8,2.2,1.4,2.7,1.6c0.5,0.3,0.7,0.2,0.5-0.2c-0.2-0.4-0.6-1.1-1.5-2c-0.9-0.9-2.1-2-4-2.9
				c-0.9-0.5-2-0.9-3.2-1.2c-1.2-0.3-2.5-0.5-4-0.4c-1.4,0.1-2.9,0.4-4.4,1.1c-1.4,0.7-2.9,1.7-4,3.2c-1.1,1.5-1.8,3.3-2,5.2
				c-0.2,1.9,0.1,3.8,0.7,5.6c0.7,1.8,1.7,3.5,3.1,5c1.5,1.4,3.2,2.5,5,3.2c3.7,1.5,7.8,1.7,11.6,1.1c1.9-0.3,3.8-0.8,5.7-1.6
				c1.8-0.8,3.6-1.9,5.1-3.4c1.5-1.5,2.6-3.3,3.3-5.2c0.7-1.9,1-3.9,1-5.8c0-1.9-0.3-3.8-0.8-5.6c-0.5-1.8-1.3-3.5-2.3-5
				c-1.9-3-4.6-5.3-7.5-6.6c-1.5-0.6-3-1-4.5-1.1c-1.5-0.1-2.9,0.2-4.2,0.6c-1.2,0.4-2.3,1.1-3.3,1.8c-0.9,0.7-1.7,1.5-2.2,2.3
				c-1.1,1.6-1.6,3.2-1.5,4.4c0,1.2,0.3,1.8,0.5,2c0.2,0.2,0.3-0.1,0.4-0.6c0-0.3,0.2-0.6,0.3-1.1c0.2-0.4,0.3-0.9,0.6-1.4
				c0.5-1,1.5-2.2,2.9-3.2c1.4-1,3.4-1.8,5.5-1.7c2.1,0.1,4.5,1,6.5,2.7c2,1.7,3.7,4.1,4.7,6.9c0.9,2.8,1.1,6,0.3,8.9
				c-0.8,2.9-2.8,5.3-5.6,6.8c-2.8,1.4-6.2,2.1-9.5,2.1c-3.2,0-6.4-0.9-8.7-2.6c-1.2-0.8-2.1-2-2.7-3.2c-0.7-1.2-1.1-2.6-1.2-3.9
				c-0.1-1.3,0.1-2.6,0.6-3.7c0.5-1.1,1.2-2,2.1-2.7c1.8-1.4,4.1-1.9,6-1.9c1.9,0,3.6,0.6,4.8,1.1C52.6,45,53.5,45.5,54,45.8z"
              />
            </g>
            <g>
              <path d="M57.8,43.5c1.2-1.3-4.2-1.3-5.1,0C51.8,44.8,57.3,44,57.8,43.5z" />
            </g>
            <g>
              <path
                d="M84.6,24.1c1.2-0.8,0.6-0.8-1-0.4c-1.6,0.4-4.2,1.5-6.9,3c-2.7,1.5-5.5,3.5-7.6,5.4c-2.1,1.9-3.7,3.8-4.2,4.8
				c-1,2,2.6-1.9,7.5-5.6c2.4-1.8,5.2-3.6,7.5-4.9C82.3,25.2,84.1,24.4,84.6,24.1z"
              />
            </g>
            <g>
              <path
                d="M44.2,42.9c1.3,1.4,1.1,0.7,0-1.3c-1.1-2-3.2-5.2-5.9-8.6c-2.7-3.3-6.1-6.7-9.4-9.1c-3.3-2.4-6.3-3.8-7.8-4.1
				c-3-0.6,4,2.1,10.2,8C37.7,33.6,43.2,41.8,44.2,42.9z"
              />
            </g>
            <g>
              <path
                d="M23,34.7c0.9-0.3,1.4-0.5,1.1-0.8c-0.2-0.3-1.1-0.7-2.5-0.5c-0.7,0.1-1.5,0.3-2.4,0.8c-0.8,0.5-1.7,1.2-2.3,2.3
				c-0.3,0.6-0.5,1.2-0.6,2c0,0.7,0.1,1.5,0.3,2.1c0.5,1.4,1.6,2.5,2.8,3.2c0.6,0.4,1.3,0.6,1.9,0.8c0.7,0.2,1.3,0.3,2,0.3
				c1.3,0.1,2.5-0.1,3.7-0.2c2.3-0.3,4.5-0.7,6.5-1c4.1-0.7,7.4-1.6,8.9-2.4c3-1.6-4.8-1.1-13.7,0c-2.3,0.3-4.5,0.7-6.3,0.4
				c-1.8-0.2-3.3-1.5-3.5-2.8c-0.3-1.3,0.8-2.6,1.8-3.2C21.8,35,22.7,34.8,23,34.7z"
              />
            </g>
            <g>
              <path
                d="M19.1,23.6c1.1-0.2,1.5-0.4,1.3-0.7c-0.2-0.3-1.1-0.6-2.3-0.9c-1.3-0.3-3-0.5-5-0.7c-1-0.1-2-0.2-3.2-0.2
				c-1.2,0-2.6,0.1-4.1,0.8c-0.7,0.4-1.5,1-2,1.8c-0.5,0.8-0.7,1.8-0.6,2.8c0.2,1.9,1.3,3.2,2.4,4.1c1.1,1,2.3,1.6,3.5,2.1
				c1.2,0.5,2.4,0.9,3.5,1.1c2.3,0.5,4.4,0.6,6.1,0.5c1.7-0.1,3.1-0.3,3.9-0.5c1.7-0.6,0.5-1-2.3-1.4c-2.8-0.5-7.2-0.9-11-3L8.4,29
				c-0.2-0.1-0.4-0.3-0.6-0.4c-0.4-0.3-0.7-0.7-1-1c-0.3-0.4-0.5-0.7-0.6-1.1c-0.1-0.3-0.1-0.6,0-0.9c0.1-0.3,0.3-0.5,0.6-0.8
				c0.3-0.2,0.7-0.4,1.2-0.5c0.9-0.3,1.9-0.3,3-0.4C15.1,23.8,18.2,23.7,19.1,23.6z"
              />
            </g>
            <g>
              <path
                d="M21.6,15.8c1.1,0.8,1.5,1,1.5,0.6c0-0.4-0.5-1.4-1.4-2.7c-1-1.3-2.4-2.9-4.4-4.6c-1-0.8-2.1-1.6-3.3-2.4
				C12.8,6,11.5,5.2,9.9,4.6C9.1,4.4,8.3,4.1,7.4,4.1c-0.9-0.1-2,0-3,0.4c-1,0.4-1.9,1.3-2.4,2.3c-0.5,1-0.6,2.1-0.5,3.1
				c0.1,1,0.5,2,1,2.7c0.5,0.8,1.1,1.4,1.6,2c1.2,1.1,2.3,1.9,3.5,2.8c4.5,3.3,8.7,5.3,10.8,5.8c2.1,0.5,0.9-0.6-1.9-2.7
				c-1.4-1-3.2-2.4-5.2-3.9c-1-0.8-2-1.6-3.1-2.5C7,13.2,6,12.3,5.3,11.4C5,10.9,4.7,10.4,4.6,9.9c-0.1-0.5-0.1-1,0-1.4
				c0.2-0.8,0.9-1.3,2.1-1.3c1.1,0,2.4,0.4,3.6,0.9c1.2,0.6,2.4,1.2,3.5,1.8C18,12.3,20.7,15.1,21.6,15.8z"
              />
            </g>
            <g>
              <path
                d="M35.2,22.7c0.4,1.1,0.7,1.4,0.9,1.1c0.2-0.3,0.4-1.2,0.3-2.6c0-2.8-0.9-7.5-3.5-12.2c-0.6-1.2-1.3-2.3-2.1-3.4
				c-0.8-1.1-1.8-2.3-3.2-3.2c-1.5-0.9-3.3-1.2-5-0.6c-0.9,0.3-1.6,0.9-2.1,1.6c-0.5,0.7-0.8,1.5-0.9,2.2c-0.3,1.4-0.1,2.7,0.1,3.8
				c0.2,1.1,0.6,2,0.8,2.9c0.6,1.7,1.1,3.1,1.6,3.9c1,1.6,1.1,0.2,0.8-2.8c-0.1-0.8-0.2-1.6-0.4-2.6c-0.2-0.9-0.3-1.9-0.3-2.8
				c0-0.9,0.1-1.9,0.5-2.4c0.3-0.5,0.9-0.9,1.7-0.8c0.8,0,1.7,0.4,2.5,1.2c0.8,0.7,1.5,1.7,2.2,2.7c1.4,2,2.5,4.1,3.4,6.1
				C34.3,18.6,34.8,21.9,35.2,22.7z"
              />
            </g>
            <g>
              <path
                d="M45.1,35c0.1,1.9,0.8,1.4,1.7-0.6c0.8-2,1.6-5.8,1.3-9.9c-0.1-1-0.2-2.1-0.5-3.1c-0.2-1-0.5-2.1-1-3.2
				c-0.4-1.1-1-2.1-1.8-3c-0.8-0.9-1.9-1.6-3.1-1.9c-1.2-0.3-2.4,0-3.3,0.5c-0.9,0.5-1.5,1.2-1.9,1.9c-0.8,1.3-0.9,2.6-0.7,3.3
				c0.2,0.7,0.5,0.8,0.7,0.5c0.2-0.3,0.5-0.9,1-1.7c0.5-0.7,1.4-1.6,2.4-1.7c0.5,0,1,0,1.5,0.3c0.5,0.3,1,0.8,1.5,1.5
				c0.9,1.4,1.4,3.2,1.8,5.1c0.4,1.9,0.6,3.7,0.6,5.4C45.5,31.7,45,34.3,45.1,35z"
              />
            </g>
            <g>
              <path
                d="M59.9,31.5c0.5,2.1,1,1.2,1.6-1c0.6-2.2,1.6-5.8,3.6-9.5c1-1.8,2.2-3.6,3.6-5.3c0.3-0.4,0.7-0.9,1-1.1
				c0.1-0.1,0.3-0.3,0.4-0.3c0,0,0.1-0.1,0.1-0.1c0.1-0.1,0.2-0.1,0.3,0c0,0,0.1,0.1,0.1,0.1c0,0.1,0,0,0,0.1l0.1,0.4
				c0.6,4,0.4,7.4,0.7,9.1c0.1,0.8,0.4,1,0.7,0.6c0.3-0.4,0.7-1.3,1-2.7c0.3-1.4,0.6-3.2,0.6-5.2c0-0.5,0-1,0-1.6
				c0-0.3,0-0.5-0.1-0.8c0-0.5-0.1-1-0.3-1.5c-0.4-0.9-1.3-1.6-2.3-1.7c-0.5-0.1-1,0-1.6,0.2c-0.3,0.1-0.5,0.2-0.7,0.3
				c-0.2,0.1-0.3,0.2-0.5,0.3c-0.3,0.2-0.6,0.5-0.9,0.7l-0.6,0.7c-0.4,0.4-0.8,0.9-1.2,1.4c-0.7,1-1.4,1.9-2,3
				c-1.2,2-2.1,4.1-2.6,6.1C59.6,27.6,59.7,30.7,59.9,31.5z"
              />
            </g>
            <g>
              <path
                d="M72,20.4c-0.5,2,0.3,1.6,1.8-0.1c1.5-1.7,3.7-4.9,6.7-7.5c1.5-1.3,3.2-2.5,5.1-3.2c0.9-0.4,1.9-0.7,2.6-0.7
				c0.2,0,0.4,0,0.5,0c0,0,0.1,0,0.1,0c0,0,0,0,0,0c0,0,0.1,0,0.1,0c0.1,0,0.2,0.1,0.2,0.3c0,0,0,0.1,0,0.1c0,0,0,0,0,0.1l0,0.1
				c0,0.2-0.1,0.4-0.2,0.6c-0.2,0.4-0.3,0.9-0.5,1.3c-0.3,0.8-0.6,1.6-0.9,2.3c-0.5,1.4-1,2.6-1.2,3.4c-0.4,1.6,0.7,1,2.3-1.2
				c0.8-1.1,1.7-2.6,2.6-4.4c0.1-0.2,0.2-0.5,0.3-0.7c0.1-0.3,0.2-0.5,0.4-1.1c0.2-1,0-2.1-0.7-2.8c-0.3-0.4-0.8-0.7-1.3-0.9
				c-0.5-0.2-0.8-0.3-1.2-0.3c-0.7-0.1-1.5,0-2.2,0.1c-2.4,0.5-4.7,1.7-6.5,3.2c-1.9,1.4-3.3,3.1-4.5,4.7C73.4,17,72.2,19.6,72,20.4
				z"
              />
            </g>
            <g>
              <path
                d="M90,13.4c-1,1-1.1,1.5-0.7,1.5c0.4,0,1.3-0.4,2.7-1.1c1.4-0.6,3.3-1.4,5.5-2c1.1-0.3,2.4-0.6,3.6-0.8
				c0.6-0.1,1.3-0.2,2-0.2c0.7,0,1.4-0.1,2-0.1c1.3,0,2.3,0.4,2.7,1c0.2,0.3,0.3,0.7,0.3,1.2c0,0.5-0.2,1.1-0.4,1.6
				c-0.3,0.6-0.6,1-1,1.6c-0.4,0.5-0.9,1-1.4,1.4c-1,0.9-2.2,1.7-3.3,2.3c-2.3,1.3-4.7,2.3-6.6,3.3c-1.9,0.9-3.4,1.8-4.3,2.5
				c-1.8,1.3-0.1,1.2,3.3,0.1c1.7-0.5,3.9-1.2,6.5-2.2c2.5-1,5.4-2.4,7.8-4.9c0.3-0.3,0.6-0.6,0.8-1c0.3-0.4,0.5-0.7,0.8-1.1
				c0.4-0.8,0.8-1.7,1-2.7c0.2-1,0.1-2.1-0.4-3.1c-0.5-1-1.3-1.8-2.3-2.3c-1.9-0.8-3.6-0.7-5.1-0.6c-1.5,0.2-2.9,0.4-4.2,0.8
				C94,10,90.7,12.6,90,13.4z"
              />
            </g>
            <g>
              <path
                d="M92.4,25.3c-0.8,0.5-0.9,0.9-0.6,1.1c0.3,0.2,0.9,0.1,1.8,0.2c0.9,0.1,2.1,0.2,3.4,0.8c0.3,0.1,0.6,0.3,0.9,0.5
				c0.1,0.1,0.3,0.2,0.4,0.3l0.2,0.2l0.1,0.1c0,0,0,0,0,0c0,0,0,0,0,0l0,0l0,0c0,0,0,0,0,0l-0.1,0.1c-0.9,0.9-2.7,1.6-4.6,2
				c-1.9,0.4-4,0.9-5.7,1.3c-3.6,0.9-6.6,1.9-7.8,2.8c-2.5,1.8,4.4,0.9,12.3-0.7c1.9-0.4,4.2-0.7,6.3-2c0.5-0.3,1-0.7,1.4-1.1
				c0.4-0.4,1.1-1.2,1.2-1.9c0.2-0.8-0.1-1.6-0.6-2.2c-0.1-0.1-0.3-0.3-0.4-0.4c-0.2-0.1-0.3-0.2-0.4-0.3c-0.2-0.1-0.4-0.3-0.6-0.4
				c-1.7-0.9-3.5-1.1-4.7-1.1C93.5,24.7,92.7,25.1,92.4,25.3z"
              />
            </g>
            <g>
              <path
                d="M81.8,34.7c-1,0.2-1.3,0.4-1.1,0.7c0.2,0.3,0.9,0.5,1.8,0.9c0.5,0.2,1,0.4,1.6,0.7c0.6,0.3,1.3,0.7,1.8,1.1
				c0.6,0.4,0.9,0.8,0.9,1.2c0.1,0.4,0,1-0.4,1.6c-0.3,0.5-0.9,1-1.7,1.4c-0.8,0.4-1.7,0.7-2.7,1c-2,0.6-4,1-5.8,1.3
				c-3.7,0.6-7,0.6-8.5,1c-1.6,0.3-0.6,1,2,1.6c2.6,0.5,6.8,0.7,11.2-0.3c1.1-0.2,2.2-0.5,3.2-0.9c1.1-0.4,2.2-0.8,3.3-1.6
				c0.5-0.4,1-0.8,1.4-1.4c0.4-0.5,0.7-1.1,0.8-1.8c0.4-1.2,0.2-2.7-0.6-3.7c-0.8-1-1.7-1.4-2.4-1.8c-0.8-0.3-1.5-0.5-2.1-0.7
				C83.1,34.7,82.2,34.6,81.8,34.7z"
              />
            </g>
          </g>
        </g>
      </svg>
    </Box>
  )
}
