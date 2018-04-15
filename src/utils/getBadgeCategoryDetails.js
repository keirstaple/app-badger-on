import find from 'lodash/fp/find';

import badgeCategoryDetails from '../consts/badgeCategoryDetails';

const getBadgeCategoryDetails = ({ category }) => find({ category })(badgeCategoryDetails);

export default getBadgeCategoryDetails;
