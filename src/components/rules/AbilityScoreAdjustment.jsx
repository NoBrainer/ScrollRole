import PropTypes from "prop-types";

export const AbilityScoreAdjustmentPropType = PropTypes.shape({
	ability: PropTypes.string.isRequired,
	modifier: PropTypes.number.isRequired,
});