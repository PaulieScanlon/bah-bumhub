import React, { FunctionComponent, memo } from 'react'
import { Box, SxStyleProp } from 'theme-ui'

import theme from '../../gatsby-plugin-theme-ui'
const { colors } = theme

import { useTone } from '../../hooks/useTone'

interface IPantsDownProps {
  /** Theme UI JSX pragma */
  sx?: SxStyleProp
  /** The color of the shadow */
  shadowColor?: string
}

export const PantsDown: FunctionComponent<IPantsDownProps> = memo(({ shadowColor = colors.shadowBlue, sx }) => {
  const tone = useTone()
  return (
    <Box sx={{ margin: '0 auto', ...sx }}>
      <svg version="1.0" x="0px" y="0px" viewBox="0 0 471.6 329.7" width="100%" height="100%">
        <g>
          <ellipse fill={shadowColor} cx="245" cy="292" rx="124.1" ry="11.7" />
          <g>
            <path
              d="M327.2,270c4.7-37.9-4-65.1-12.2-81.2c-11-21.7-24.8-32-26.3-33.2l-8.1-5.9l-10.3,14.2L260,177.9l8,5.8
				c0.6,0.5,9.2,7.4,16.1,21.4c8.7,17.6,11.4,38.7,8,62.6l-1.7,12.3l12.4-1c1.4-0.1,2.8-0.2,4.2-0.3c3.4-0.2,6.8-0.2,10-0.2l9,0.2
				L327.2,270z"
            />
            <path
              fill={colors.skin[tone].dark}
              d="M302.1,269.2c3.7-25.9,0.7-48.9-9-68.4c-8.4-17-19-24.9-19.1-25l4.4-6.1l4.4-6.1
				c0.5,0.4,13.2,9.7,23.2,29.6c7.9,15.5,15.5,40.6,11.2,75.5C312.2,268.6,307.1,268.8,302.1,269.2z"
            />
            <path
              d="M172.7,273.6c-6.7-37.7,0.6-65.2,8-81.8c9.8-22.2,23.1-33.3,24.6-34.5l7.8-6.3l11,13.6l11,13.5l-7.7,6.2
				c-0.6,0.5-8.8,7.9-15,22.2c-7.8,18.1-9.4,39.2-4.8,62.9l2.4,12.2l-12.5-0.3c-1.4,0-2.8-0.1-4.2-0.1c-3.4,0-6.8,0.1-10,0.3l-9,0.6
				L172.7,273.6z"
            />
            <path
              fill={colors.skin[tone].dark}
              d="M197.7,271.6c-5-25.7-3.2-48.8,5.4-68.8c7.5-17.4,17.7-25.9,17.8-25.9l-4.7-5.8l-4.7-5.8
				c-0.5,0.4-12.7,10.4-21.7,30.7c-7.1,15.9-13.4,41.3-7.3,76C187.6,271.5,192.7,271.4,197.7,271.6z"
            />
            <path
              d="M193.6,209.7c-26.4,0-51.3-10.7-70-30.2c-16.9-17.6-25.4-44.1-25.2-78.8c0.1-24.2,4.5-43.9,4.7-44.7l3-13.3l249.2-13.3
				l5.1,11c19,40.8,20,88.9,2.5,122.5c-11.5,22.1-29.6,35.9-52.3,39.9c-8.5,1.5-16.5,2.2-24,2.2c-19.4,0-32.5-5.1-40.8-10.4
				C230.4,204.4,212.1,209.7,193.6,209.7z"
            />
            <path
              fill={colors.skin[tone].mid}
              d="M344.1,48L120.7,60c0,0-16.6,73.2,16,107.1s81.8,30.6,110.4,4c0,0,11.3,22.6,60.5,14
				C356.8,176.4,370.7,105.2,344.1,48z"
            />
            <path
              fill={colors.skin[tone].dark}
              d="M136.6,167c32.6,33.9,81.8,30.6,110.4,4c0,0,11.3,22.6,60.5,14c26.4-4.6,42.7-27.4,48-56.2
				c-13.9,37-38.4,47.3-65.8,45.9c-40.9-2-35.9-30.9-35.9-30.9s-21.9,61.9-93.8,27.9C108.4,147.3,120.7,60,120.7,60
				S104,133.1,136.6,167z"
            />
            <g>
              <path d="M157.3,152.5c-0.2-8.6-14.2-8.4-14,0.3C143.5,161.4,157.5,161.2,157.3,152.5z" />
              <path d="M173.8,157.5c-0.1-6.6-10.9-6.4-10.8,0.2C163.2,164.4,174,164.2,173.8,157.5z" />
              <path d="M162.6,167.7c-0.1-7.1-11.7-6.9-11.5,0.2C151.2,175,162.7,174.8,162.6,167.7z" />
            </g>
            <path d="M354.4,286.3l-48-20.8l-11-0.8c0,0-6,17.6-6.5,23.6C327.5,290.3,354.4,286.3,354.4,286.3z" />
            <path d="M146.4,291.4l46.8-23.3l12.2-0.5c0,0,5.9,16.5,6.7,22.4C173.7,294.1,146.4,291.4,146.4,291.4z" />
            <g>
              <path
                d="M252.4,180.7c13.7-21.7,13.8-50.3,0.2-72.2c-3.1-4.9-14.1-3.2-10.1,3.2c11.6,18.7,11.5,44.2-0.2,62.9
					C238.8,180.1,249.3,185.6,252.4,180.7L252.4,180.7z"
              />
            </g>
            <g>
              <path
                d="M261.5,109.8c0.6,6.6-1.4,12.3-6.3,16.9c-4.6,4.2-1,13.9,4.7,8.6c7.8-7.1,12-17.5,11.1-28
					C270.4,99.5,261,103.5,261.5,109.8L261.5,109.8z"
              />
            </g>
            <g>
              <path
                fill={colors.background}
                d="M363.2,255c-1.8-1.1-3.6-2.1-5.5-3.1c1.9-4.7,1-10.8-3.3-14.7c-7-6.5-17.9-6.6-27.1-4
					c-5.5-13.7-21.6-21.1-35.8-15.1c-1.4,0.6-4.5,3-6,3c-1.6,0-3.3-2-4.5-2.9c-3.2-2.5-6.8-4.2-10.9-4.8c-3.8-0.6-7.7-0.5-11.3,0.6
					c-1.6,0.5-3.1,1.1-4.6,1.8c-0.6,0.3-4.7,3-4.2,3.6c-1.2-0.4-3.5-2.1-4.4-2.5c-1.8-0.8-3.6-1.4-5.4-1.8c-4-0.9-8.2-1.1-12.3-0.6
					c-8.6,1.1-15.2,5.3-21.3,11.3c-0.6,0.6-1.3,1.3-1.9,1.9c-3.8-5.4-9.4-9.3-16.5-10.2c-7.8-1-15.2,2-20.6,7.3
					c-4.8-3-11.2-3.1-16.2,0.4c-4.6,3.2-6.6,8.6-6.2,14c-6.8,0-13.6,3.4-17,9.7c-2.7,5-2.7,11.4,1.6,15.6c2.4,2.3,5.5,3.4,8.8,3.8
					c0.5,3.8,2.5,7.2,5.4,9.3c2.1,1.9,4.8,3.2,7.9,3.7c8.9,1.4,16.3-3.7,21.9-10.1c2.4,1.8,5.4,2.8,8.6,2.6c4.7-0.3,8.4-3,10.8-6.8
					c7.8,3.2,16.6,4.8,24.1-0.1c3.4-2.2,5.8-5.8,6.8-9.6c4.2,2.4,8.8,3.6,13.9,2.7c5.2-0.9,9.9-3.3,13.5-7c3.6,2.3,7.8,3.7,12.1,3.7
					c2.9,0,5.8-0.7,8.6-1.4c1.2-0.3,3.2-1.2,4.5-0.9c2.1,0.5,2.3,2,3.5,3.6c5.7,8.3,16,9.6,25.3,8.4c2.6,4.8,8.2,7.2,14,7.8
					c10.3,1,21.3,1.8,31.6,1c6.7-0.5,19.4-2.3,19.2-11.4C370.2,259.4,366.4,257.1,363.2,255z"
              />
              <path
                fill={colors.lightBlue}
                d="M319.5,274.1c10.3,1,21.3,1.8,31.6,1c6.7-0.5,19.4-2.3,19.2-11.4c-0.1-4.3-3.9-6.6-7.2-8.7
					c-1.8-1.1-3.6-2.1-5.5-3.1c1.9-4.7,1-10.8-3.3-14.7c-0.6-0.6-1.3-1.1-1.9-1.5c-8.8,2.8-15,11.8-15,11.8s20,12,8,15.3
					c-12,3.3-25.3-9.3-41.2-20.6s-27.3-4-42.6,0.7c-15.3,4.7-21.3-6-34.6-7.3c-13.3-1.3-13.3,12-25.9,18c-12.6,6-22.6-4-37.9-7.3
					s-8.6,9.3-25.9,11.3c-5.3,0.6-8.7,0.1-10.8-0.9c0.1,2.9,1.1,5.8,3.4,8c2.4,2.3,5.5,3.4,8.8,3.8c0.5,3.8,2.5,7.2,5.4,9.3
					c2.1,1.9,4.8,3.2,7.9,3.7c8.9,1.4,16.3-3.7,21.9-10.1c2.4,1.8,5.4,2.8,8.6,2.6c4.7-0.3,8.4-3,10.8-6.8
					c7.8,3.2,16.6,4.8,24.1-0.1c3.4-2.2,5.8-5.8,6.8-9.6c4.2,2.4,8.8,3.6,13.9,2.7c5.2-0.9,9.9-3.3,13.5-7c3.6,2.3,7.8,3.7,12.1,3.7
					c2.9,0,5.8-0.7,8.6-1.4c1.2-0.3,3.2-1.2,4.5-0.9c2.1,0.5,2.3,2,3.5,3.6c5.7,8.3,16,9.6,25.3,8.4
					C308.1,271.2,313.7,273.6,319.5,274.1z"
              />
              <path
                fill={colors.darkRed}
                d="M305.8,269.6c-10.3,2-21.5-2.9-27.2-11.7c-0.6-0.9-1.8-1.5-2.8-1.1c-7.2,2.6-15.2,2-21.9-1.9
					c-1.1-0.6-2.1-0.3-3,0.4c-6.5,5.1-15.4,6.7-23.3,4.4c-1.1-0.3-2.2,0.2-2.8,1.1c-3.4,5.6-9.2,9.2-15.5,10.7
					c-5.9-0.9-11.8-1.6-17.7-2c-1.9-0.1-2.8,2-2.1,3.4c0.1,0.8,0.6,1.5,1.4,1.6c0.5,0.1,1,0.2,1.5,0.3c3.6,1.6,7.5,2.3,11.3,2.3
					c2.6,0.5,5.2,1,7.8,1.5c6.9,1.2,13.8,2.4,20.7,3.5c1.7,0.3,4.1-1.2,3.2-3.2c-1-2.5-2.4-4.8-4.2-6.8c6-0.4,18.4,1.9,19.4,1.8
					c0.3,0.7,17.4-1.6,19.9-1.6c-0.3,1.4-0.1,2.8,0.4,4.1c1.5,3.9,5.2,5.6,9.2,5.4c4.5-0.2,8.9-2,13.2-3.2c4.6-1.3,9.3-2.7,13.9-4.1
					C310.4,273.6,309,269,305.8,269.6z"
              />
              <g>
                <path
                  d="M165.3,224.2c1.3,0,1.9-0.2,1.8-0.7c-0.1-0.5-0.8-1.3-2.3-2.1c-1.4-0.7-3.6-1.4-6.1-1.4c-2.5,0-5.5,0.5-8.2,2
						c-1.4,0.7-2.7,1.6-3.9,2.7c-1.2,1.1-2.2,2.4-3,3.8c-0.8,1.4-1.4,2.9-1.7,4.4c-0.4,1.5-0.5,3-0.4,4.3c0.1,2.8,0.9,5.2,2,7
						c1,1.8,2.3,2.8,3.3,3.2c1,0.4,1.4,0.2,1.4-0.4c0-0.6-0.4-1.5-0.8-2.8c-0.4-1.3-0.8-2.9-0.9-4.9c-0.1-1.9,0.1-4.1,0.9-6.2
						c0.7-2.1,2-4,3.8-5.4c1.7-1.5,3.8-2.5,5.8-3.1C160.9,223.5,164.3,224.2,165.3,224.2z"
                />
              </g>
              <path
                d="M176.8,262.7c-0.3-1.3-0.7-1.4-1.2-0.9c-0.2,0.3-0.5,0.7-0.8,1.3c-0.3,0.6-0.7,1.3-1,2.1c-0.9,1.6-2,3.6-3.8,5.5
					c-1.7,2-3.9,3.9-6.6,5.5c-2.6,1.5-5.6,2.7-8.6,3.1c-1.5,0.2-3,0.3-4.4,0.2c-1.4-0.1-2.7-0.4-4-0.8c-0.9-0.3-1.8-0.7-2.5-1.2
					c-0.2-0.1-0.4-0.3-0.5-0.5c-1.1-1-1.9-2.3-2.6-3.7c-0.3-0.7-0.6-1.4-0.8-2.1c-0.1-0.4-0.2-0.8-0.4-1.2c0,0,0,0,0-0.1
					c2.4-0.9,3.8-2.6,4.2-3.7c0.4-1.2,0.1-1.5-0.5-1.4c-0.6,0.1-1.6,0.7-3.1,1.1c-1.5,0.4-3.5,0.6-5.8,0.1c-1.1-0.3-2.3-0.7-3.4-1.4
					c-1.1-0.7-2-1.5-2.7-2.6c-1.4-2.1-1.9-5.1-1.4-7.9c0.5-2.8,1.9-5.5,3.7-7.4c1.7-1.9,3.9-3,5.6-3.8c1.8-0.8,3.1-1.3,3.6-1.6
					c1.4-0.8,1.8-1.4,1.3-1.7c-0.4-0.3-1.7-0.5-3.6-0.3c-1.9,0.2-4.5,0.6-7.4,2.2c-2.9,1.6-5.6,4.4-7.3,8c-1.6,3.5-2.2,7.9-0.9,12
					c0.2,0.5,0.3,1,0.6,1.5c0.2,0.5,0.5,0.9,0.7,1.4c0.3,0.4,0.6,0.9,0.9,1.3c0.3,0.4,0.7,0.8,1,1.2c1.5,1.4,3.2,2.4,4.9,3.1
					c1.7,0.7,3.4,0.9,5,0.9c0.7,0,1.5-0.1,2.1-0.2c0,0.1,0,0.1,0,0.2c-0.1,0.2-0.2,0.4-0.3,0.7c-0.1,0.3-0.2,0.8-0.2,1.2
					c0,0.5,0,1,0.1,1.6c0.4,2.3,2.1,5,4.7,6.9c1.3,1,2.8,1.8,4.6,2.4c0.9,0.3,1.8,0.5,2.7,0.7c0.9,0.1,1.8,0.2,2.8,0.3
					c3.8,0.2,7.7-0.6,11.2-2.2c3.5-1.6,6.5-3.8,8.7-6.4c2.3-2.5,3.7-5.3,4.5-7.7c0.2-0.6,0.3-1.2,0.5-1.7c0.1-0.5,0.2-1.1,0.2-1.5
					C177,264.1,176.9,263.3,176.8,262.7z"
              />
              <g>
                <path
                  d="M175.6,271.6c-1,0-1.5,0.2-1.5,0.7c-0.1,0.4,0.3,1.2,1.2,1.9c0.9,0.8,2.3,1.5,4.1,2c1.8,0.5,3.9,0.6,6.1,0.2
						c2.2-0.4,4.5-1.4,6.2-2.9c1.8-1.5,3.1-3.3,3.9-5.2c0.8-1.8,1.1-3.7,0.9-5.1c-0.1-1.5-0.6-2.6-1.2-3.2c-0.6-0.6-1-0.6-1.4-0.3
						c-0.3,0.3-0.6,1-0.9,1.9c-0.3,0.9-0.6,2-1.2,3.1c-0.6,1.2-1.3,2.4-2.4,3.5c-1,1.1-2.3,2-3.7,2.6c-1.4,0.6-3,1-4.4,1.1
						C178.6,272.3,176.3,271.5,175.6,271.6z"
                />
              </g>
              <g>
                <path
                  d="M196.2,267.9c-1.3-0.5-2-0.4-2,0.1c0,0.5,0.5,1.6,1.8,2.9c1.3,1.2,3.4,2.6,6.1,3.4c2.7,0.8,6,1.2,9.4,0.5
						c1.7-0.3,3.4-0.9,5-1.7c0.8-0.4,1.6-0.9,2.3-1.4c0.7-0.6,1.4-1.1,2.1-1.8c0.7-0.6,1.2-1.3,1.8-2c0.5-0.7,1-1.4,1.4-2.2
						c0.8-1.5,1.4-3,1.8-4.5c0.7-3,0.7-5.9,0.1-8.1c-0.6-2.2-1.6-3.8-2.5-4.5c-0.9-0.8-1.3-0.6-1.5,0c-0.1,0.6,0.1,1.7,0.1,3.3
						c0.1,1.5,0.1,3.5-0.4,5.7c-0.5,2.2-1.4,4.5-2.9,6.6c-1.5,2.1-3.5,3.8-5.9,4.8c-1.2,0.5-2.4,0.9-3.7,1.1
						c-0.6,0.1-1.3,0.2-1.9,0.2c-0.6,0-1.2,0.1-1.8,0c-2.4-0.1-4.5-0.6-6-1.1c-0.4-0.1-0.8-0.3-1.1-0.4c-0.3-0.1-0.6-0.2-0.9-0.4
						C196.9,268.1,196.5,267.9,196.2,267.9z"
                />
              </g>
              <path
                d="M360.4,241.5c-0.3-1.6-0.9-3.4-1.8-5c-0.5-0.8-1-1.6-1.7-2.4c-0.7-0.8-1.4-1.5-2.2-2.1c-3.1-2.5-7.1-3.8-10.9-4.1
					c-3.8-0.4-7.5,0.1-10.8,1c-2.3,0.7-4.4,1.6-6.1,2.7c-0.1-1-0.3-2-0.5-2.9c0-1.9-0.5-4.3-1.9-6.7c-0.8-1.4-1.9-2.9-3.3-4.1
					c-1.4-1.2-2.9-2.3-4.6-3.2c-3.4-1.7-7.2-2.6-11-2.9c-3.7-0.3-7.7,0.1-11,1.6c-1.6,0.7-3.1,1.7-4.3,2.8c-1.1,1.1-2,2.3-2.6,3.5
					c-1.2,2.4-1.1,4.6-0.6,5.7c0.5,1.2,1,1.2,1.3,0.7c0.4-0.5,0.7-1.6,1.5-3c0.8-1.3,2.2-3,4.3-4.2c2-1.2,4.8-1.9,7.9-1.9
					c3.1-0.1,6.5,0.4,9.5,1.2c3,0.9,5.7,2.3,7.6,4c1.9,1.8,3.1,3.9,3.7,5.6c0.6,1.7,0.7,3.1,0.8,3.7c0.1,0.3,0.1,0.6,0.2,0.8
					c0,0.5,0,1.1,0,1.6c-1.2,1.4-1.9,2.7-2,3.7c-0.2,1.3,0.2,1.6,0.8,1.3c0.6-0.3,1.5-1.1,2.9-2.1c1.4-0.9,3.4-2,5.9-2.7
					c2.5-0.8,5.6-1.2,8.7-1.3c3.1,0,6.3,0.4,9,1.6c1.3,0.6,2.6,1.4,3.6,2.3c1,0.9,1.8,2,2.4,3.1c0.6,1.1,1,2.3,1.3,3.4
					c0.2,1.1,0.3,2.1,0.3,3c-0.1,1.8-0.6,3.1-0.7,3.6c-0.1,0.8-0.4,1.3-0.3,1.7c0,0.4,0.1,0.6,0.4,0.5c0.5,0,1.9-0.7,3-2.7
					C360.3,247.8,361,244.8,360.4,241.5z"
              />
              <g>
                <path
                  d="M287,226c1,1.1,1.6,1.4,1.9,1c0.3-0.5,0.2-1.7-0.3-3.5c-0.6-1.8-1.7-4.1-3.6-6.3c-1.9-2.2-4.5-4.4-7.8-5.9
						c-1.6-0.8-3.4-1.4-5.2-1.7c-1.8-0.4-3.7-0.5-5.5-0.4c-1.8,0.1-3.6,0.4-5.3,1c-1.7,0.5-3.2,1.2-4.6,2.1
						c-2.8,1.7-4.9,3.7-6.3,5.7c-1.4,2-2,3.8-2,5c-0.1,1.2,0.3,1.5,0.9,1.2c0.6-0.3,1.4-1.3,2.6-2.5c1.2-1.2,2.8-2.6,4.9-3.9
						c2.1-1.3,4.6-2.4,7.4-2.9c2.8-0.6,5.7-0.5,8.5,0.2c1.4,0.4,2.7,0.8,4,1.4c0.6,0.3,1.2,0.6,1.8,0.9c0.6,0.4,1.1,0.7,1.6,1.1
						C284.2,221.5,286.2,225.1,287,226z"
                />
              </g>
              <g>
                <path
                  d="M249.7,225.4c1.3,1.1,2,1.3,2.1,0.8c0.2-0.5-0.2-1.9-1.2-3.7c-1-1.8-2.7-4.1-5.2-6.1c-2.5-2-5.8-4-9.5-5.1
						c-1.9-0.6-3.9-0.9-5.9-1.1c-2-0.2-4.1,0-6.1,0.3c-1,0.2-2,0.4-2.9,0.7c-0.9,0.3-1.9,0.6-2.8,1c-1.8,0.8-3.4,1.7-4.9,2.8
						c-2.9,2.1-5.1,4.6-6.5,6.9c-1.4,2.3-2,4.3-2,5.7c0,1.4,0.3,1.6,0.9,1.2c0.6-0.4,1.4-1.6,2.7-3.1c1.3-1.5,3-3.3,5.2-5
						c2.3-1.7,5-3.2,8.1-4.2c3.1-1,6.4-1.3,9.7-0.9c1.6,0.2,3.2,0.5,4.7,1c0.8,0.2,1.5,0.5,2.2,0.8c0.7,0.3,1.4,0.6,2,0.9
						C245.7,220.9,248.7,224.6,249.7,225.4z"
                />
              </g>
              <g>
                <path
                  d="M163.3,229c-0.2,1.6,0.1,2.2,0.6,2c0.5-0.1,1.3-1,2.3-2.2c1.1-1.2,2.5-2.7,4.4-4.2c1.9-1.4,4.3-2.9,7-3.7
						c1.3-0.5,2.8-0.8,4.2-1c1.4-0.2,2.9-0.2,4.4,0c0.7,0,1.5,0.2,2.2,0.3c0.7,0.2,1.4,0.3,2.1,0.6c1.4,0.4,2.7,1,4,1.7
						c5,2.6,8.2,6.5,10.1,8.3c1,0.9,1.5,0.9,1.5,0.1c0.1-0.8-0.2-2.4-1.3-4.4c-1-2-2.7-4.3-5.2-6.4c-2.5-2.1-5.7-3.9-9.3-4.9
						c-3.6-1-7.6-1.1-11.2-0.2c-1.8,0.4-3.5,1-5,1.8c-0.8,0.4-1.5,0.8-2.2,1.2c-0.7,0.5-1.3,0.9-1.9,1.4c-2.4,1.9-4.1,4-5.2,5.8
						C163.8,227,163.4,228.4,163.3,229z"
                />
              </g>
              <g>
                <path
                  d="M233.6,269.5c-2.5,0.2-2,1.3,0.4,2.8c2.4,1.4,6.9,3,12.1,3.8c5.2,0.8,11,0.7,15.9-0.2c4.8-0.9,8.6-2.6,10.1-4.1
						c1.5-1.5,0-1.8-3-1.6c-3,0.2-7.5,0.9-12.4,1c-4.9,0.2-10.2-0.1-14.5-0.6C237.9,270,234.6,269.4,233.6,269.5z"
                />
              </g>
              <g>
                <path
                  d="M192.5,274.8c-1.8,0.7-2.3,1.2-1.8,1.5c0.5,0.4,1.8,0.6,3.8,0.9c2,0.3,4.7,0.8,7.8,1.5c3.1,0.7,6.6,1.8,10.3,3
						c3.8,1.2,7.7,2.5,11.9,3.5c2.2,0.5,4.6,0.9,7.3,0.2c1.3-0.3,2.6-1.1,3.6-2.1c1-1,1.6-2.3,1.9-3.5c0.5-2.5-0.1-4.7-1.1-6.4
						c-0.5-0.9-1.2-1.6-1.8-2.2c-0.7-0.6-1.4-1-2.1-1.4c-2.8-1.4-5.1-1.5-6.6-1.4c-1.5,0.1-1.8,0.5-1.2,1.1c0.6,0.6,2.2,1.2,4,2.3
						c0.9,0.5,1.8,1.2,2.6,2c0.2,0.2,0.4,0.4,0.5,0.6c0.1,0.2,0.3,0.4,0.4,0.6c0.2,0.5,0.4,1,0.5,1.6c0.2,1.1,0,2.3-0.5,2.9
						c-0.5,0.6-1.4,1.1-3,1c-1.6,0-3.4-0.5-5.4-1c-2-0.5-3.9-1.1-5.9-1.6c-3.9-1.1-7.8-2.1-11.3-2.7c-3.5-0.6-6.7-0.9-9.1-0.9
						C194.9,274.3,193.2,274.6,192.5,274.8z"
                />
              </g>
              <path
                d="M366.6,253.7c-1.8-1.5-3.7-2.6-5.6-3.3c-1.9-0.7-3.7-1-5.3-1.2c-3.2-0.3-5.8,0.2-7.3,0.7c-1.5,0.6-1.7,1.1-0.8,1.4
					c0.8,0.3,2.6,0.6,5,1c2.4,0.5,5.4,1.3,8.1,3c0.7,0.4,1.3,0.9,1.9,1.5c0.6,0.6,1.1,1.1,1.6,1.8c0.9,1.4,1.6,3,1.9,4.8
					c0.2,0.9,0.1,1.8,0.1,2.6c-0.1,0.9-0.3,1.7-0.7,2.4c-0.7,1.5-1.8,2.6-3.5,3.4c-1.7,0.8-3.7,1.5-5.6,2c-1.9,0.5-3.8,0.8-5.6,1
					c-7.3,0.8-12.9-0.6-14.5-0.7c-0.4,0-0.8,0-1.1,0c-0.2-0.1-0.3-0.1-0.5-0.2c0.7-0.8,1.2-1.6,1.6-2.3c0.8-1.5,1.1-2.9,1-3.8
					c-0.1-0.9-0.5-1.2-1-1c-0.5,0.2-1.1,0.8-1.9,1.6c-0.8,0.8-1.9,1.8-3.2,2.7c-1.3,0.9-3,1.8-4.8,2.4c-1.8,0.6-3.7,0.9-5.7,0.7
					c-1.9-0.1-3.8-0.6-5.4-1.2c-3.3-1.3-5.4-3.3-6.2-3.6c-0.1,0-0.1-0.1-0.2-0.1c0,0,0,0,0,0c-0.2-0.3-0.5-0.5-0.8-0.7
					c1.5-1,2.8-2.1,3.7-3.2c1.3-1.5,1.9-3,2-4.1c0.1-1.1-0.2-1.4-0.8-1.2c-0.6,0.1-1.4,0.8-2.5,1.6c-1.1,0.8-2.6,1.8-4.4,2.6
					c-1.8,0.8-3.9,1.5-6.2,1.8c-2.3,0.3-4.6,0.1-6.9-0.5c-2.2-0.6-4.3-1.7-6-2.9c-2.9-2-4.6-4.3-5.6-5.4c-0.1-0.2-0.2-0.4-0.3-0.7
					c-0.3-0.6-0.5-1.2-0.8-1.8c0.2-0.3,0.3-0.6,0.4-0.9c0.6-1.6,0.6-2.9,0.2-3.7c-0.4-0.8-0.8-0.9-1.2-0.7c-0.4,0.2-0.8,0.8-1.5,1.6
					c-0.6,0.7-1.4,1.6-2.6,2.5c-1.1,0.8-2.6,1.6-4.3,2.1c-0.8,0.2-1.7,0.4-2.6,0.5c-0.9,0.1-1.8,0.1-2.7,0c-1.8-0.1-3.7-0.5-5.3-1
					c-2.4-0.7-4.4-1.5-5.6-1.9c-0.6-0.4-1.3-0.8-1.9-1.2c0,0,0-0.1,0-0.1c0.3-1.6,0.2-2.9-0.2-3.8c-1.8-3.3-2.4,3.9-8.5,8.2
					c-1.5,1.1-3.1,1.9-4.9,2.5c-1.8,0.5-3.6,0.8-5.3,0.7c-3.4,0-6-1-6.8-1c-1.1-0.1-1.6,0.1-1.7,0.6c0,0.5,0.4,1.2,1.4,2.1
					c1,0.8,2.5,1.7,4.4,2.3c1.9,0.6,4.3,1,6.7,0.7c2.4-0.2,5-0.9,7.2-2.2c2.2-1.3,4-3,5.3-4.8c0.7-0.9,1.2-1.9,1.6-2.8
					c0.2,0.1,0.4,0.3,0.6,0.4c0.2,0.2,0.4,0.4,0.6,0.7c1.6,1.7,5,4,9.5,5.2c1.1,0.3,2.3,0.5,3.6,0.6c0.6,0,1.2,0,1.9,0
					c0.6,0,1.3-0.1,1.9-0.2c2.5-0.4,4.8-1.5,6.6-2.8c0.3-0.2,0.5-0.4,0.7-0.6c0,0.1,0,0.1,0.1,0.2c0.3,0.5,0.6,1,0.9,1.5
					c0.3,0.4,0.7,0.9,1,1.3c-1.7,0.3-6.1,1.9-11.1,3c-3.7,0.8-7.8,1.4-11,1.6c-3.3,0.2-5.8,0.2-6.5,0.3c-1.8,0.3-1.2,0.7,0.9,1.2
					c2,0.4,5.5,0.7,9.4,0.4c3.9-0.3,8.1-1.1,11.5-2.3c3.5-1.1,6.1-2.6,7.2-3.5c0,0,0,0,0-0.1c0.5,0.9,1.1,1.9,2,2.9
					c1.6,1.9,3.7,3.7,6.4,5.1c1.3,0.7,2.8,1.2,4.3,1.6c1.5,0.4,3.1,0.6,4.6,0.6c1.5,0,3.1-0.2,4.5-0.5c1.3-0.3,2.5-0.7,3.6-1.2
					c0.6,1.1,1.2,2,2.1,2.9c0.4,0.3,0.7,0.6,1.1,0.9c0.1,0.1,0.2,0.3,0.4,0.4c-4.3,0.1-10.7,1-17.3,3c-3.5,1-6.8,2.5-9.8,3.1
					c-0.8,0.2-1.5,0.3-2.2,0.3c-0.7,0-1.4,0-2.1-0.1c-1.4-0.2-2.6-0.6-3.6-1.3c-0.5-0.3-0.9-0.7-1.3-1.1c-0.2-0.2-0.3-0.4-0.5-0.6
					c-0.1-0.2-0.2-0.4-0.3-0.6c-0.4-0.9-0.4-1.9-0.3-2.7c0.2-1.7,1.2-2.7,1.5-3.2c0.5-0.6,0.9-0.9,1.2-1.2c0.2-0.3,0.3-0.5,0-0.7
					c-0.3-0.2-0.8-0.3-1.6-0.1c-0.8,0.2-1.8,0.7-2.7,1.6c-0.9,0.9-1.7,2.2-2,3.8c-0.2,0.8-0.3,1.7-0.2,2.6c0,0.5,0.1,1,0.3,1.4
					c0.2,0.5,0.4,1,0.6,1.4c0.9,1.8,2.5,3.3,4.3,4.3c1.8,1,3.8,1.5,5.9,1.6c4.2,0.2,8-1.2,11.2-2.4c3.3-1.2,6.5-2.2,9.5-3.1
					c5-1.5,9.4-2.5,12.2-3.6c1.5,1,3.3,1.9,5.3,2.4c2.5,0.7,5.3,0.8,7.9,0.3c2.6-0.5,5-1.6,6.8-3c0.2-0.1,0.3-0.3,0.5-0.4
					c2.9,1.6,6.1,2.5,9.4,2.9c0.7,0.1,1.4,0.2,2,0.2c0.9,0.2,1.9,0.3,3,0.4c3.9,0.3,8.3,0,12.9-1.2c2.2-0.6,4.7-1.3,7-3.1
					c2.4-1.8,4-4.6,4.4-7.3C372.4,262.1,370.2,256.9,366.6,253.7z"
              />
              <g>
                <path
                  d="M280.1,274.4c-1.8,2.1,2.3,0.2,7.5-1.6c2.6-0.9,5.5-1.8,8-2.5c2.5-0.7,4.6-1.3,5.6-1.9c2-1.1-3.2-1.2-8.9,0.4
						c-2.8,0.8-5.7,1.9-8,3C282,273,280.4,274,280.1,274.4z"
                />
              </g>
              <g>
                <path
                  d="M214.2,272.1c-1.5,0.9,1.1,1.4,4.2,2c3.1,0.5,6.9,1.5,8.4,1.1c1.5-0.4-1.1-1.9-4.6-2.7c-1.7-0.4-3.6-0.6-5-0.6
						C215.6,271.8,214.5,272,214.2,272.1z"
                />
              </g>
            </g>
            <g>
              <g>
                <path
                  d="M116,186.3c0.6,0.6,0.5,1.8-0.3,3.2c-0.8,1.4-2.2,2.9-4,4.2c-3.6,2.6-7.5,3.4-8.3,1.9c-0.9-1.5,1.3-4.4,4.7-6.9
						c1.7-1.2,3.4-2.1,4.8-2.6C114.3,185.7,115.4,185.7,116,186.3z"
                />
              </g>
              <g>
                <path
                  d="M90.7,144.8c0.1,0.9-0.8,1.8-2.4,2.7c-1.6,0.9-3.7,1.7-6.2,2.5c-2.5,0.7-4.7,1.2-6.5,1.4c-1.8,0.1-3.1-0.1-3.4-0.9
						c-0.4-0.8,0.3-2,1.8-3.2c1.5-1.2,3.7-2.4,6.4-3.3c2.7-0.8,5.3-1.1,7.1-0.8C89.4,143.4,90.6,144,90.7,144.8z"
                />
              </g>
              <g>
                <path
                  d="M89.4,89.1c-0.8,1.5-5.7,0.6-11.3-1.5c-2.8-1.1-5.2-2.2-6.9-3.4c-1.7-1.1-2.7-2.2-2.5-3c0.2-0.8,1.6-1.3,3.8-1.2
						c2.1,0.1,4.9,0.6,7.9,1.7c2.9,1.1,5.4,2.6,7,4C89,87.1,89.8,88.4,89.4,89.1z"
                />
              </g>
            </g>
            <g>
              <g>
                <path
                  d="M355.6,186.3c-0.6,0.6-0.5,1.8,0.3,3.2c0.8,1.4,2.2,2.9,4,4.2c3.6,2.6,7.5,3.4,8.3,1.9c0.9-1.5-1.3-4.4-4.7-6.9
						c-1.7-1.2-3.4-2.1-4.8-2.6C357.3,185.7,356.2,185.7,355.6,186.3z"
                />
              </g>
              <g>
                <path
                  d="M380.9,144.8c-0.1,0.9,0.8,1.8,2.4,2.7c1.6,0.9,3.7,1.7,6.2,2.5c2.5,0.7,4.7,1.2,6.5,1.4c1.8,0.1,3.1-0.1,3.4-0.9
						c0.4-0.8-0.3-2-1.8-3.2c-1.5-1.2-3.7-2.4-6.4-3.3c-2.7-0.8-5.3-1.1-7.1-0.8C382.2,143.4,381,144,380.9,144.8z"
                />
              </g>
              <g>
                <path
                  d="M382.2,89.1c0.8,1.5,5.7,0.6,11.3-1.5c2.8-1.1,5.2-2.2,6.9-3.4c1.7-1.1,2.7-2.2,2.5-3c-0.2-0.8-1.6-1.3-3.8-1.2
						c-2.1,0.1-4.9,0.6-7.9,1.7c-2.9,1.1-5.4,2.6-7,4C382.5,87.1,381.8,88.4,382.2,89.1z"
                />
              </g>
            </g>
            <path fill={colors.skin[tone].light} d="M120.7,60c0,0,118.4,38.6,223.5-12C342.8,48,120.7,60,120.7,60z" />

            <path
              fill="none"
              stroke={colors.background}
              strokeWidth="12"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeMiterlimit="10"
              d="
				M338.4,62.9c4.3,13.4,6.3,27.5,5.8,41.5"
            />

            <path
              fill="none"
              stroke={colors.background}
              strokeWidth="13"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeMiterlimit="10"
              d="
				M344.3,121.8c0-1.3,0.2,0.1,0-2"
            />
          </g>
        </g>
      </svg>
    </Box>
  )
})
