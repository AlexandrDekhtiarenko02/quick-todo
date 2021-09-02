export const getCircleProgressRatioValue = (points: number, requiredPoints: number): number =>
	points === 0 ? 0 : (points * 100) / requiredPoints
