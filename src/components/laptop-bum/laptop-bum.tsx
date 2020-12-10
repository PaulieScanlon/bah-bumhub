import React, { FunctionComponent } from 'react'
import { Box, SxStyleProp } from 'theme-ui'

import theme from '../../gatsby-plugin-theme-ui'
const { colors } = theme

interface ILaptopBumProps {
  /** Theme UI JSX pragma */
  sx?: SxStyleProp
}

export const LaptopBum: FunctionComponent<ILaptopBumProps> = ({ sx }) => {
  return (
    <Box sx={{ width: '100%', height: 'auto', ...sx }}>
      <svg version="1.0" x="0px" y="0px" viewBox="0 0 400 260" width="100%" height="100%">
        <path
          fill={colors.shadowAccent}
          d="M369.5,211.6l-58-6.3c20.5-2.7,32.6-6,32.6-9.6c0-8.9-73.7-16.1-164.7-16.1s-164.7,7.2-164.7,16.1
	c0,5.8,31.7,10.9,79.2,13.7l-10.6,1.6c-3.3,0.5-3.6,5.1-0.4,6.1l109,31.9c0.5,0.1,0.9,0.2,1.4,0.1l176.4-31.4
	C373.2,217.2,373.1,212,369.5,211.6z"
        />
        <g>
          <path
            d="M133.7,196.7c-26.4,0-51.3-10.7-70-30.2c-16.9-17.6-25.4-44.1-25.2-78.8c0.1-24.2,4.5-43.9,4.7-44.7l3-13.3l249.2-13.3
		l5.1,11c19,40.8,20,88.9,2.5,122.5c-11.5,22.1-29.6,35.9-52.3,39.9c-8.5,1.5-16.5,2.2-24,2.2c-19.4,0-32.5-5.1-40.8-10.4
		C170.5,191.3,152.2,196.7,133.7,196.7z"
          />
          <path
            fill={colors.midSkin}
            d="M284.2,35l-223.5,12c0,0-16.6,73.2,16,107.1s81.8,30.6,110.4,4c0,0,11.3,22.6,60.5,14
		C296.9,163.3,310.8,92.1,284.2,35z"
          />
          <path
            fill={colors.darkSkin}
            d="M297.3,87.9c-2.6,15-11.3,37.7-35.5,42c-33.9,6-40.9-14-70.8-15c-29.9-1-28.6,22.9-69.8,21.9
		c-42.9-1-59.6-55.1-63.6-68.2c-2.4,24.3-2.1,63.2,19.2,85.4c32.6,33.9,81.8,30.6,110.4,4c0,0,11.3,22.6,60.5,14
		C282.2,165.9,299.3,129.1,297.3,87.9z"
          />
          <g>
            <path d="M97.4,139.5c-0.2-8.6-14.2-8.4-14,0.3C83.6,148.4,97.6,148.1,97.4,139.5z" />
            <path d="M113.9,144.5c-0.1-6.6-10.9-6.4-10.8,0.2C103.3,151.3,114.1,151.1,113.9,144.5z" />
            <path d="M102.6,154.7c-0.1-7.1-11.7-6.9-11.5,0.2C91.3,162,102.8,161.8,102.6,154.7z" />
          </g>
          <path fill={colors.lightSkin} d="M60.7,46.9c0,0,118.4,38.6,223.5-12C282.9,35,60.7,46.9,60.7,46.9z" />
          <path fill={colors.midSkin} d="M142.8,156.1c-3.8,0-3.8,6,0,6C146.6,162.1,146.6,156.1,142.8,156.1z" />
          <path fill={colors.midSkin} d="M162.7,138.9c-3.8,0-3.8,6,0,6C166.5,144.8,166.5,138.9,162.7,138.9z" />
          <path fill={colors.midSkin} d="M164,157.5c-2.1,0-2.1,3.3,0,3.3C166.2,160.8,166.2,157.5,164,157.5z" />
          <path fill={colors.midSkin} d="M124.1,149.5c-3.8,0-3.8,6,0,6C128,155.4,128,149.5,124.1,149.5z" />
          <path fill={colors.midSkin} d="M213.3,144.2c-3.8,0-3.8,6,0,6C217.1,150.1,217.1,144.2,213.3,144.2z" />
          <path fill={colors.midSkin} d="M202.6,125.6c-3.8,0-3.8,6,0,6C206.4,131.5,206.4,125.6,202.6,125.6z" />
          <path fill={colors.midSkin} d="M181.3,128.2c-3.8,0-3.8,6,0,6C185.2,134.2,185.2,128.2,181.3,128.2z" />
          <path fill={colors.midSkin} d="M174.7,150.8c-3.8,0-3.8,6,0,6C178.5,156.8,178.5,150.8,174.7,150.8z" />
          <path fill={colors.midSkin} d="M110.8,160.1c-3.8,0-3.8,6,0,6C114.7,166.1,114.7,160.1,110.8,160.1z" />
          <path fill={colors.midSkin} d="M68.3,134.9c-3.8,0-3.8,6,0,6C72.1,140.8,72.1,134.9,68.3,134.9z" />
          <path
            fill={colors.midSkin}
            d="M76.2,118.6c-1.1,0-2,0.9-2,2c0,0.4,0,0.9,0,1.3c0,1,0.9,2,1.9,1.9c1.1,0,1.9-0.9,1.9-1.9
		c0-0.4,0-0.9,0-1.3C78.2,119.5,77.3,118.5,76.2,118.6z"
          />
          <path fill={colors.midSkin} d="M61.6,112.3c-3.8,0-3.8,6,0,6C65.4,118.2,65.4,112.3,61.6,112.3z" />
          <path fill={colors.midSkin} d="M78.9,142.8c-3.8,0-3.8,6,0,6C82.7,148.8,82.7,142.8,78.9,142.8z" />
          <path fill={colors.midSkin} d="M222.6,162.8c-3.8,0-3.8,6,0,6C226.4,168.7,226.4,162.8,222.6,162.8z" />
          <path fill={colors.midSkin} d="M227.9,141.5c-3.8,0-3.8,6,0,6C231.7,147.5,231.7,141.5,227.9,141.5z" />
          <path fill={colors.midSkin} d="M242.5,162.8c-3.8,0-3.8,6,0,6C246.3,168.7,246.4,162.8,242.5,162.8z" />
          <path fill={colors.midSkin} d="M258.5,144.2c-3.8,0-3.8,6,0,6C262.3,150.1,262.3,144.2,258.5,144.2z" />
          <path fill={colors.midSkin} d="M243.8,141.6c-2,0-2,3,0,3C245.8,144.7,245.8,141.6,243.8,141.6z" />
          <path fill={colors.midSkin} d="M279.8,134.9c-3.8,0-3.8,6,0,6C283.6,140.8,283.6,134.9,279.8,134.9z" />
          <path fill={colors.midSkin} d="M266.5,154.8c-3.8,0-3.8,6,0,6C270.3,160.8,270.3,154.8,266.5,154.8z" />
          <path fill={colors.midSkin} d="M282.4,125.6c-3.8,0-3.8,6,0,6C286.2,131.5,286.3,125.6,282.4,125.6z" />
          <path
            d="M211.2,94.2c-0.7-7.8-10.1-3.8-9.5,2.5c0.4,4.6-0.4,8.7-2.5,12.3c-1.6-4.7-3.7-9.2-6.4-13.5c-3.1-4.9-14.1-3.2-10.1,3.2
		c11.6,18.7,11.5,44.2-0.2,62.9c-3.4,5.5,7.1,10.9,10.1,6.1c8.9-14.1,12.1-31.1,9.4-47.3C208.5,113.4,212,103.9,211.2,94.2z"
          />
        </g>
        <g>
          <path
            d="M206.1,241.4c-0.8,0-1.7-0.1-2.5-0.3l-65.1-18.4c-2.7-0.8-4.9-2.7-5.9-5.3l-2.7-6.6c-1.3-3.1-0.7-6.8,1.5-9.3
		c1.7-2,4.3-3.1,6.9-3.1c0.2,0,0.4,0,0.5,0l59.3-6.6l19.2-91.7c0.7-3.5,3.5-6.2,6.9-7l7.4-1.6c0.2,0,0.4-0.1,0.7-0.1l142.6-19.9
		c0.4-0.1,0.8-0.1,1.2-0.1c2.6,0,5.1,1.1,6.8,3.1c2,2.3,2.7,5.5,1.9,8.4l-35.5,126.9c-0.9,3.3-3.7,5.8-7.1,6.5l-131.8,24.1
		c0,0-0.1,0-0.1,0.1C209.1,241,207.6,241.4,206.1,241.4z"
          />
          <polygon fill="#6B6B6B" points="340.7,207.3 205.7,232 233.6,100.2 376.2,80.4 	" />

          <ellipse
            transform="matrix(0.4469 -0.8946 0.8946 0.4469 20.9453 308.6699)"
            fill={colors.secondary}
            cx="260.1"
            cy="137.4"
            rx="20.2"
            ry="17.4"
          />
          <polygon fill={colors.primary} points="323.2,160.4 279.9,177.2 288.3,200.7 330.4,184.4 	" />
          <g>
            <g>
              <path
                d="M331.1,124.5l1.1-2.1l4.2,1.3l-5.4,9.4c-0.5,0.9-0.9,1.6-1,2c-0.4,1-0.2,1.5,0.5,1.6c0.7,0.1,1.5-0.2,2.5-1.1
				c1.7-1.4,3-3.3,4-5.6c1.3-3.2,1.5-6.3,0.3-9.2c-1.2-3.1-3.6-5.4-7.3-6.8c-4.4-1.6-8.8-1-12.9,1.7c-4.1,2.7-6.5,6.6-7.3,11.4
				c-0.5,3.3-0.1,6.2,1.2,8.8c1.2,2.5,2.9,4.2,5.1,5.2c1.5,0.7,3.2,1.1,5.2,1.4c2.9,0.4,5.6,0.3,8.4-0.2l-0.4,3.1
				c-2.7,0.5-5.7,0.6-9.1,0.3c-4.8-0.5-8.6-2.2-11.5-5.3c-3.5-3.8-5.1-8.6-4.4-14.6c0.7-6.5,3.9-11.8,9.5-15.5
				c5.7-3.7,11.7-4.3,17.6-1.9c5,2,8.2,5.4,9.7,10c1.3,4.1,1,8.3-0.9,12.4c-1.2,2.8-3,5.1-5.2,6.8c-2.2,1.7-4.1,2.5-5.9,2.2
				c-1.8-0.3-2.7-1.3-2.6-3c-2,1.7-4.2,2.3-6.8,1.9c-2-0.3-3.5-1.3-4.6-3c-1.1-1.8-1.5-3.9-1-6.3c0.6-3.1,2.3-5.6,4.9-7.6
				c2.7-2,5.3-2.6,7.9-1.8C329.4,120.9,330.7,122.3,331.1,124.5z M328,130.3l0.1-0.2c0.3-1,0.3-1.9-0.1-2.7c-0.4-0.8-1.1-1.4-2-1.6
				c-1.2-0.3-2.5,0-3.8,0.9c-1.3,0.9-2.1,2.2-2.5,3.8c-0.3,1.1-0.2,2.1,0.3,2.9c0.5,0.8,1.2,1.3,2.1,1.4c1.2,0.2,2.3-0.1,3.4-1
				C326.7,132.9,327.5,131.8,328,130.3z"
              />
            </g>
          </g>
          <polygon fill="#C6C6C6" points="208.8,199.6 138.6,207.4 203.4,223.6 	" />
          <polygon fill="#A6A6A6" points="206.1,232.4 203.4,223.2 138.3,207.3 141.1,213.9 	" />
          <polygon fill="#A6A6A6" points="206.5,232.2 199.3,230.4 226.2,101.8 233.6,100.2 	" />
        </g>
      </svg>
    </Box>
  )
}
