import React, { FunctionComponent } from 'react'
import { Box, SxStyleProp } from 'theme-ui'

import theme from '../../gatsby-plugin-theme-ui'
const { colors } = theme

import { useTone } from '../../hooks/useTone'
interface IGlassesBumProps {
  /** Theme UI JSX pragma */
  sx?: SxStyleProp
}

export const SearchBum: FunctionComponent<IGlassesBumProps> = ({ sx }) => {
  const tone = useTone()

  return (
    <Box sx={{ margin: '0 auto', ...sx }}>
      <svg version="1.0" x="0px" y="0px" viewBox="0 0 420 300" width="100%" height="100%">
        <path
          fill={colors.shadowBlue}
          d="M335.8,222.5c26.4-2.8,42.4-6.6,42.4-10.8c0-8.9-73.7-16.1-164.7-16.1s-164.7,7.2-164.7,16.1
	c0,8.9,73.7,16.1,164.7,16.1c27.2,0,52.9-0.6,75.5-1.8c-8.2,1.9-13.1,4.3-13.1,7c0,5.8,23.7,10.6,52.9,10.6s52.9-4.7,52.9-10.6
	C381.8,227.6,361.7,223.2,335.8,222.5z"
        />
        <g>
          <path
            fill={colors.text}
            d="M167.8,212.7c-26.4,0-51.3-10.7-70-30.2c-16.9-17.6-25.4-44.1-25.2-78.8c0.1-24.2,4.5-43.9,4.7-44.7l3-13.3
		l249.2-13.3l5.1,11c19,40.8,20,88.9,2.5,122.5c-11.5,22.1-29.6,35.9-52.3,39.9c-8.5,1.5-16.5,2.2-24,2.2
		c-19.4,0-32.5-5.1-40.8-10.4C204.6,207.3,186.3,212.7,167.8,212.7z"
          />
          <path
            fill={colors.tone[tone].mid}
            d="M318.3,50.9l-223.5,12c0,0-16.6,73.2,16,107.1s81.8,30.6,110.4,4c0,0,11.3,22.6,60.5,14
		C331,179.3,344.9,108.1,318.3,50.9z"
          />
          <path
            fill={colors.tone[tone].dark}
            d="M110.8,170c32.6,33.9,81.8,30.6,110.4,4c0,0,11.3,22.6,60.5,14c26.4-4.6,42.7-27.4,48-56.2
		c-13.9,37-38.4,47.3-65.8,45.9c-40.9-2-35.9-30.9-35.9-30.9s-21.9,61.9-93.8,27.9C82.6,150.2,94.8,62.9,94.8,62.9
		S78.2,136.1,110.8,170z"
          />
          <g>
            <path fill={colors.text} d="M131.5,155.5c-0.2-8.6-14.2-8.4-14,0.3C117.7,164.4,131.7,164.1,131.5,155.5z" />
            <path fill={colors.text} d="M148,160.5c-0.1-6.6-10.9-6.4-10.8,0.2C137.4,167.3,148.2,167.1,148,160.5z" />
            <path fill={colors.text} d="M136.7,170.6c-0.1-7.1-11.7-6.9-11.5,0.2C125.4,178,136.9,177.7,136.7,170.6z" />
          </g>
          <g>
            <path
              fill={colors.text}
              d="M226.6,183.7c13.7-21.7,13.8-50.3,0.2-72.2c-3.1-4.9-14.1-3.2-10.1,3.2c11.6,18.7,11.5,44.2-0.2,62.9
			C213,183,223.5,188.5,226.6,183.7L226.6,183.7z"
            />
          </g>
          <g>
            <path
              fill={colors.text}
              d="M235.7,112.7c0.6,6.6-1.4,12.3-6.3,16.9c-4.6,4.2-1,13.9,4.7,8.6c7.8-7.1,12-17.5,11.1-28
			C244.6,102.4,235.2,106.5,235.7,112.7L235.7,112.7z"
            />
          </g>
          <path fill={colors.tone[tone].light} d="M94.8,62.9c0,0,118.4,38.6,223.5-12C317,50.9,94.8,62.9,94.8,62.9z" />
          <g>
            <g>
              <path
                fill={colors.text}
                d="M161.7,202.7c-0.8-0.4-3.6,3.2-6.2,6.8c-2.5,3.7-4.9,7.4-3.5,8.5c1.4,1.1,4.6-2.4,6.8-6.4
				C161.2,207.6,162.5,203.1,161.7,202.7z"
              />
            </g>
            <g>
              <path
                fill={colors.text}
                d="M323.4,175.6c-0.5,0.7,2.7,4,5.9,7.1c3.3,3,6.7,5.9,7.9,4.6c1.2-1.2-1.7-4.9-5.4-7.7
				C328.2,176.8,323.9,174.9,323.4,175.6z"
              />
            </g>
            <g>
              <path fill={colors.text} d="M167.7,174.7c-0.7-1.6-18,4.1-16.5,7.3C152.7,185.3,168.4,176.3,167.7,174.7z" />
            </g>
            <g>
              <path
                fill={colors.text}
                d="M171.3,176.9c-0.9-0.1-2.4,2.7-3.9,5.3c-1.4,2.6-2.9,5.2-1.5,6.3c0.7,0.5,1.7,0.2,2.6-0.7
				c1-0.9,1.9-2.4,2.5-4c0.6-1.6,0.9-3.3,0.9-4.6C172,177.9,171.7,177,171.3,176.9z"
              />
            </g>
            <g>
              <path
                fill={colors.text}
                d="M101.6,180.5c-0.8-1.6-16.3,3.8-14.7,6.9C88.5,190.6,102.4,182.1,101.6,180.5z"
              />
            </g>
            <g>
              <path
                fill={colors.text}
                d="M107.9,182.3c-0.6-0.6-4.2,1.7-7.5,4.4c-3.3,2.7-6.2,5.6-5.1,7c1.1,1.3,4.7-1,7.8-4.1
				C106.1,186.5,108.5,182.9,107.9,182.3z"
              />
            </g>
            <g>
              <path
                fill={colors.text}
                d="M275.6,198.6c-1.8,0.1-2.9,15.3,0.6,15.1C279.8,213.5,277.4,198.5,275.6,198.6z"
              />
            </g>
            <g>
              <path
                fill={colors.text}
                d="M284.2,196.7c-0.8,0.3-0.4,4.1,0.3,7.7c0.8,3.6,1.9,7,3.6,6.7c1.7-0.4,1.4-4.2,0.2-7.8
				C287,199.7,285,196.4,284.2,196.7z"
              />
            </g>
            <g>
              <path fill={colors.text} d="M195.8,204.7c-1.7,0.6,0,11.4,3.3,10.3C202.4,213.9,197.4,204.2,195.8,204.7z" />
            </g>
            <g>
              <path fill={colors.text} d="M255,176.1c-1.7,0.6,0,11.4,3.3,10.3C261.6,185.3,256.6,175.6,255,176.1z" />
            </g>
            <g>
              <path fill={colors.text} d="M285.9,152.7c-0.9,1.5,7.5,8.7,9.2,5.6C296.9,155.3,286.8,151.2,285.9,152.7z" />
            </g>
            <g>
              <path fill={colors.text} d="M263.6,176.9c-1.4,1,3,7,5.7,5C272.1,179.9,265,175.9,263.6,176.9z" />
            </g>
          </g>
        </g>
        <g>
          <g>
            <path
              fill={colors.text}
              d="M367.3,226.1c-0.7,0-1.4,0-2.1-0.1c-12.7-1.5-21.1-15.4-19.3-31.6c1.8-15.4,11.8-26.6,23.8-26.6
			c0.7,0,1.4,0,2.1,0.1c12.7,1.5,21.1,15.4,19.3,31.6c-0.8,7.1-3.6,13.7-7.8,18.6C379,223.3,373.3,226.1,367.3,226.1z M369.8,185.8
			c-1.4,0-5.1,3.6-5.9,10.6c-0.4,3.3,0,6.6,1.2,9c0.8,1.9,1.8,2.6,2.3,2.7c0,0,0,0,0,0c0.5,0,1.5-0.6,2.5-1.7
			c1.8-2.1,3.1-5.4,3.5-8.9c0.4-3.3,0-6.6-1.2-9C371.2,186.7,370.3,185.9,369.8,185.8L369.8,185.8z"
            />
            <path
              fill={colors.primary}
              d="M367.3,221.1c4.4,0,8.9-2.2,12.3-6.2c3.5-4.1,5.9-9.7,6.6-15.9c1.5-13.5-5-25-14.9-26.1
			c-9.9-1.1-18.8,8.6-20.4,22c-1.5,13.5,5,25,14.9,26.1C366.3,221.1,366.8,221.1,367.3,221.1z M369.8,180.8c0.2,0,0.4,0,0.6,0
			c5.2,0.6,8.8,8.5,7.8,17.2c-0.5,4.5-2.2,8.7-4.7,11.6c-1.2,1.4-3.7,3.8-6.8,3.4c-5.2-0.6-8.8-8.5-7.8-17.2
			C359.9,187.5,364.7,180.8,369.8,180.8z"
            />
          </g>
          <path
            fill={colors.text}
            d="M333,238.4c-11.5,0-23.5-1.9-32.2-5c-1.8-0.7-3.1-2.3-3.3-4.2l-6.1-61.4c-0.1-1.4,0.3-2.8,1.3-3.9
		c0.9-1,2.3-1.6,3.7-1.6h69.8c1.4,0,2.8,0.6,3.7,1.7c0.9,1.1,1.4,2.5,1.3,3.9c-0.2,2.2-5.7,54-6.9,61.3c-0.2,1.5-1.2,2.9-2.6,3.6
		C353,237.4,341.3,238.4,333,238.4C333,238.4,333,238.4,333,238.4z"
          />
          <path
            fill={colors.highlight}
            d="M302.5,228.7c14.9,5.3,42.7,7.2,56.8-0.4c1.1-7.2,6.9-61,6.9-61h-69.8L302.5,228.7z"
          />
          <path
            fill={colors.primary}
            d="M298.3,186.6c13,20,35.3,34.4,61.5,38.3c1.8-13.9,6.4-57.6,6.4-57.6h-69.8L298.3,186.6z"
          />
          <path
            fill={colors.text}
            d="M331.3,176.8c-9.5,0-18.5-0.5-25.3-1.4c-7.4-1-14.6-2.4-14.6-8.2s7.2-7.2,14.6-8.2
		c6.8-0.9,15.8-1.4,25.3-1.4s18.5,0.5,25.3,1.4c7.4,1,14.6,2.4,14.6,8.2s-7.2,7.2-14.6,8.2C349.8,176.4,340.8,176.8,331.3,176.8z"
          />
          <ellipse fill={colors.primary} cx="331.3" cy="167.3" rx="34.9" ry="4.6" />
          <ellipse fill={colors.text} cx="331.3" cy="169.7" rx="29.3" ry="2.1" />
          <path fill={colors.white} d="M341,183.5l-0.8,27.5l16-1.1c0,0,1.9-21,2.3-27.1L341,183.5z" />
          <polygon fill={colors.white} points="340.6,216.7 339.8,226 354.1,224.3 355.6,215.5 	" />
          <g>
            <g>
              <path
                fill={colors.text}
                d="M384.2,118.5c0.9-0.9,1.9-1.1,2.4-1.1c0.5,0,0.7-0.1,0.3-0.4c-0.3-0.3-1.3-0.6-2.6-0.1
				c-1.2,0.5-2.7,1.6-3.3,3.8c-0.5,2.3,0.8,4.9,3,6.3c1.1,0.7,2.4,1.3,3.9,1.4c1.4,0.2,2.8,0,4.2-0.3c1.4-0.3,2.7-0.8,4-1.4
				c1.3-0.6,2.7-1.2,4-2.2c1.3-0.9,2.6-2.1,3.6-3.6c1-1.5,1.5-3.6,1.3-5.5c-0.4-3.9-3.1-7.1-6.4-8.7c-3.3-1.6-6.9-1.8-10.2-1.5
				c-3.4,0.3-6.6,1.2-9.5,2.6c-2.9,1.4-5.6,3.4-7.5,5.8c-1.9,2.5-3,5.5-3,8.3c0,1.4,0.2,2.8,0.7,4c0.2,0.6,0.5,1.2,0.8,1.7
				c0.4,0.6,0.8,1,1.2,1.4c1.8,1.6,3.7,2.3,5.3,2.7c1.7,0.4,3.1,0.4,4.1,0.2c1-0.2,1.5-0.6,1.6-0.8c0.1-0.2-0.1-0.3-0.6-0.3
				c-0.5,0-1.3-0.1-2.4-0.3c-1.1-0.2-2.5-0.7-3.9-1.5c-0.7-0.4-1.4-0.9-2.1-1.5c-0.1-0.1-0.3-0.3-0.4-0.4c-0.1-0.2-0.2-0.3-0.4-0.5
				c-0.2-0.3-0.4-0.7-0.6-1.1c-0.7-1.7-0.7-3.9,0-6.1c0.7-2.1,2.2-4.2,4.2-5.9c2-1.7,4.6-3,7.4-3.8c2.7-0.8,5.7-1.2,8.6-1.1
				c2.9,0.2,5.6,1.1,7.4,2.9c0.9,0.9,1.6,2,1.9,3.2c0.3,1.2,0.3,2.4-0.2,3.5c-0.9,2.2-3.1,3.9-5.3,5c-2.3,1.2-4.5,2.1-6.6,2.3
				c-1,0.1-2,0-2.8-0.3c-0.9-0.3-1.6-0.7-2.2-1.3c-1.2-1.1-1.5-2.5-1.3-3.5C383.2,119.6,383.8,118.9,384.2,118.5z"
              />
            </g>
            <path
              fill={colors.text}
              d="M413.6,124.1c-0.2-0.9-0.7-1.7-1.2-2.3c-2.1-2.5-4.9-3.3-7-3.4c-2.2-0.1-3.9,0.7-4.5,1.5
			c-0.6,0.8-0.4,1.1,0,1c0.5,0,1.3-0.3,2.7-0.2c1.3,0.1,3.3,0.6,4.8,1.8c0.8,0.6,1.5,1.4,1.7,2.1c0.2,0.8,0.2,1.3-0.5,2.3
			c-0.3,0.5-0.8,1-1.2,1.5c-0.4,0.5-0.9,0.9-1.4,1.4c-1,0.9-2.1,1.6-3.3,2.3c-2.4,1.3-4.9,2.1-7.2,2.6c-4.7,0.9-8.5,0.8-9.5,1
			c-0.3,0.1-0.5,0.1-0.7,0.2c-0.7-0.2-1.6,0.2-1.5,1c0.2,3.8-2,7.5-4.5,10.3c-2.3,2.5-5.4,4.6-8.8,5c-4.2,0.5-8.2-1.2-12.4-0.6
			c-3.9,0.6-6.5,3.2-8.1,6.7c-1.7,4-2,8.5-0.4,12.6c0.6,1.6,3.3,1,2.7-0.7c-1.2-3.6-1-7.6,0.7-11.1c0.8-1.7,1.9-3.3,3.7-4
			c1.7-0.7,3.6-0.7,5.3-0.5c4.1,0.4,8,1.4,12,0c3.3-1.2,6.2-3.5,8.4-6.2c2.5-3.1,4.5-7.1,3.8-11.1c0.4,0.1,0.8,0.2,1.2,0.3
			c1.5,0.3,3.6,0.5,6.1,0.4c2.5-0.1,5.4-0.5,8.2-1.5c2.9-1,5.8-2.7,8-5c0.6-0.6,1.1-1.2,1.6-1.8c0.5-0.7,1-1.5,1.3-2.4
			C413.8,126.1,413.9,125.1,413.6,124.1z"
            />
            <g>
              <path
                fill={colors.text}
                d="M379.6,134.7c-0.1-0.9-0.3-1.4-0.4-1.7c-0.2-0.3-0.3-0.3-0.4-0.1c-0.3,0.4-0.5,1.6-1.1,3.2
				c-0.7,1.6-1.9,3.7-4.1,5.2c-1.1,0.8-2.3,1.4-3.7,1.7c-1.4,0.3-3,0.4-4.8,0.3c-1.8,0-3.7-0.1-5.8,0.1c-2.1,0.2-4.3,0.9-6.1,1.9
				c-1.9,1.1-3.5,2.5-4.7,4.1c-1.2,1.7-2.1,3.5-2.6,5.3c-1,3.6-0.8,7-0.4,9.6c0.4,2.7,1,4.7,1.5,5.9c1.1,2.5,1.2,0.5,1.1-3.9
				c0-2.2-0.1-5,0.4-7.9c0.5-2.9,1.7-6,4.1-8.2c1.2-1.1,2.6-2,4.2-2.6c1.6-0.6,3.2-0.8,5-0.9c1.8-0.1,3.7,0,5.5-0.1
				c1.9-0.1,3.8-0.5,5.4-1.3c3.3-1.6,5.2-4.2,6.1-6.3C379.6,137,379.6,135.3,379.6,134.7z"
              />
            </g>
          </g>
        </g>
        <g>
          <path
            fill={colors.shadowBlue}
            d="M230.9,245.4l-52.6,6.3c-6.5,0.8-7.6,9.9-1.3,12.1l55.9,19.8c7.5,2.7,15.5,3.5,23.4,2.6l50.6-6.2
		c6.7-0.9,7.4-10.2,1-12.2l-74.3-22.1C232.6,245.4,231.7,245.3,230.9,245.4z"
          />
          <path
            fill="#C8C7C7"
            d="M236.2,240.1l-52.6,6.3c-6.5,0.8-7.6,9.9-1.3,12.1l55.9,19.8c7.5,2.7,15.5,3.5,23.4,2.6l50.6-6.2
		c6.7-0.9,7.4-10.2,1-12.2l-74.3-22.1C237.9,240.1,237.1,240,236.2,240.1z"
          />
          <path
            fill="#6D6D6C"
            d="M313.1,262.4l-53.9,6.8c-6.4,0.9-13,0.2-19.1-2l-57.9-20.5c-5.2,1.8-5.6,9.7,0.1,11.7l56.1,19.8
		c7.4,2.6,15.3,3.5,23,2.5l50.8-6.2C318.8,273.7,319.5,264.3,313.1,262.4z"
          />
          <path
            fill="#A7A6A6"
            d="M249.9,280.9c3.9,0.4,7.8,0.4,11.7-0.1l50.6-6.2c6.7-0.9,7.4-10.2,1-12.2l-63.4,6.9L249.9,280.9z"
          />
          <polygon fill={colors.text} points="240.2,274.7 226.5,270.1 226.7,266.7 240.4,271.3 	" />
          <polygon fill={colors.text} points="224,269.1 210.3,264.6 210.5,261.2 224.2,265.8 	" />
          <path
            fill={colors.text}
            d="M235,241.9l-43.3,4.9c-0.9,0.1-1,1.3-0.2,1.6l56.4,19.1c0.1,0,54-5.2,54-5.2c0.9-0.1,1-1.4,0.1-1.6
		l-66.8-18.8C235.2,241.9,235.1,241.9,235,241.9z"
          />
          <g opacity="0.52">
            <path
              fill="#98C4EB"
              d="M230.9,261.8l12.7-17.5l-8.3-2.3c-0.1,0-0.2,0-0.3,0l-22.1,2.5l-6.8,8.9L230.9,261.8z"
            />
            <path fill="#98C4EB" d="M296.2,259l-8.9-2.5l-5.4,7.7c4.2-0.4,8.2-0.8,11.4-1.1L296.2,259z" />
            <path fill="#98C4EB" d="M276.4,253.5l-12.9-3.6l-12.1,17.4c3.7-0.3,9.8-0.9,16.6-1.6L276.4,253.5z" />
          </g>
        </g>
        <g>
          <path fill="#383737" d="M236.8,41.3l-30.2,3.1l1.4,20.2c0,0,24.7,1.1,31.1-3.8S236.8,41.3,236.8,41.3z" />
          <polygon fill={colors.text} points="76.9,79.2 2.5,109.4 12.4,127.7 81.8,94 	" />
          <g opacity="0.56">
            <path fill="#98C4EB" d="M72.9,39.2c0,0,7.6,110.5,69.5,108.5c77.6-2.5,60.9-102.8,60.9-102.8L72.9,39.2z" />
            <path fill="#98C4EB" d="M354.6,14.8L242.8,40.3c0,0,8,101.2,75.5,87.8C372.1,117.4,354.6,14.8,354.6,14.8z" />
          </g>
          <g>
            <path fill={colors.shadowBlue} d="M254.1,86.7c1.3,3.2,2.8,6.4,4.5,9.5l49.6-69.7l-11.9,1.1L254.1,86.7z" />
            <path
              fill={colors.shadowBlue}
              d="M302.9,129.2c4.7,0.3,9.9,0,15.4-1.1c31.4-6.3,38.5-43.7,39-73.9C343.3,73.4,318.2,108.1,302.9,129.2z"
            />
            <path
              fill={colors.shadowBlue}
              d="M323.1,22c-17.1,24.1-41.1,58.3-58.9,83.6c5.2,7.4,11.6,13.8,19.5,18.1c20.8-29.4,52.8-75.3,71.8-102.4
			c-0.5-4.1-0.9-6.5-0.9-6.5L323.1,22z"
            />
            <path
              fill={colors.shadowBlue}
              d="M204.7,59c-0.3-7.2-1-12.3-1.3-13.7L132.3,147c3.1,0.6,6.3,0.8,9.8,0.7L204.7,59z"
            />
            <path fill={colors.shadowBlue} d="M190.6,44.3l-14.8-0.6l-64.7,93.2c3.4,2.8,7.1,5.1,11.1,6.9L190.6,44.3z" />
            <path fill={colors.shadowBlue} d="M125.1,41.5L84.6,94.4c3.2,9.2,7.3,18.3,12.5,26.3l56.5-78L125.1,41.5z" />
          </g>
          <polygon fill="#383737" points="74.2,80.3 2.5,109.4 6.9,117.6 76,89.6 	" />
          <path
            fill={colors.text}
            d="M361.6,18.6c-0.3-1.8-1.3-3.4-2.8-4.4c-1.5-1-3.4-1.3-5.1-0.9l-109,22.2c-4.4,1.5-6.3,3.8-6,5.1
		c-0.1,0-29.4,1.5-29.4,1.7c-1.3-1.9-3.4-4.5-5.6-4.6L73.3,32.2c-2-0.1-3.9,0.7-5.3,2.1c-1.4,1.4-2.1,3.4-2,5.4
		c0.1,1.2,2.1,28.9,11.9,56.8c13.7,39,36.1,59.1,64.7,58.2l0.3,0c21.3-0.7,38.1-8.4,49.9-22.8c15.6-19,19-45.6,19-64.7
		c9.3,0.8,18.7-0.2,27.7-2.7c4,19.5,13.5,49.5,34.6,65.5c10.2,7.7,21.8,11.3,34.8,10.9c3.6-0.1,7.3-0.6,11.1-1.3
		C379.5,127.7,362.4,23.1,361.6,18.6z M182,123c-9.2,11.1-22.5,17.1-39.6,17.7l-0.2,0c-45.4,1.5-58.4-70-61.4-94.1l116.4,5
		C198.4,65.4,199.9,101.3,182,123z M212.2,63.9c-0.1,0.1-0.2,0.3-0.3,0.4c0,0,0,0,0,0c-0.1-8.9-0.9-15.7-1.3-18.8
		c0.5,0.1,1.2,0.2,2.1,0.2c0.9,1.5,2.3,3.7,2.9,6.5c0.6,2.7,0.5,5.7-0.4,7.9C214.2,62.3,212.6,63.5,212.2,63.9z M224.9,61.2l0,0.1
		l0,0l0,0.1c0,0.1,0,0.1-0.1,0.1c0,0-0.1,0-0.2,0.1c-0.2,0.1-0.5,0.1-0.7,0.2c-1,0.2-2,0.4-2.9,0.6c-2.2,0.4-4.1,0.8-5.4,1.1
		c0.4-0.3,0.8-0.7,1.1-1.2c0.9-1.2,1.6-2.7,2-4.3c0.8-3.2,0.2-6.9-1.3-9.5c-0.6-1.2-1.4-2.2-2.2-2.9c1.1-0.1,2.4-0.1,3.7-0.3
		c0.1,0.4,0.6,1.1,1.2,2c1.3,1.9,3.2,4.9,4.2,8.5C224.9,57.7,225.2,59.5,224.9,61.2z M220.7,45.2C220.7,45.2,220.8,45.2,220.7,45.2
		c3.1-0.3,6.4-0.8,9.4-1.3c0,0.1,0.1,0.2,0.1,0.3c0.2,0.9,0.4,1.9,0.5,2.9c0,0.1,0,0.2,0,0.3c-0.1,1.1-0.2,2.3-0.5,3.6
		c-0.3,2-0.9,4.1-1.5,6c-0.4-2.1-1.2-4.1-2.2-5.7C224.8,48,222.3,45.9,220.7,45.2z M238.4,58.8c-0.3,0.9-0.7,1.7-1.3,2.5
		c-2.8,0.9-5.8,1.4-8.8,1.8c0.2-0.2,0.4-0.3,0.6-0.6c1.2-1.2,2.6-3.4,3.5-6c0.9-2.6,1.2-5.4,1-7.7c-0.1-0.7-0.1-1.3-0.3-1.9
		c0,0,0,0,0,0c0-1.1-0.2-2.3-0.4-3.4c0-0.1,0-0.2,0-0.3c0.6-0.1,1.1-0.2,1.6-0.4c0.5,0.4,0.9,0.8,1.4,1.3c0,0,0.1,0.1,0.1,0.1
		c0.1,0.1,0.1,0.1,0.2,0.2c0.1,0.2,0.2,0.3,0.4,0.5c0.1,0.1,0.1,0.2,0.2,0.3c0,0.2,0,0.3,0,0.5C236.8,46.5,237.2,51.4,238.4,58.8
		C238.4,58.7,238.4,58.7,238.4,58.8z M350.6,72c-2.9,32.4-14,50.8-33,54.6c-13.8,2.8-25.4,0.4-35.4-7.1
		c-22.3-16.8-29.6-54.7-31.6-69.1l99-22.6C350.7,37,352.1,54.4,350.6,72z"
          />
        </g>
      </svg>
    </Box>
  )
}