import dayjs, { type Dayjs } from 'dayjs'

/** Career start: August 2021 */
export const CAREER_START = dayjs('2021-08-01')

export const getYearsOfExperience = (
  from: Dayjs = CAREER_START,
  to: Dayjs = dayjs(),
): number => Math.max(to.diff(from, 'year'), 0)

export const yearsOfExperience = getYearsOfExperience()
