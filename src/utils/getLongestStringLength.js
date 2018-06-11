import flatMap from 'lodash/fp/flatMap';
import pick from 'lodash/fp/pick';
import values from 'lodash/values';
import flow from 'lodash/fp/flow';
import uniq from 'lodash/fp/uniq';
import reduce from 'lodash/fp/reduce';

import queriedBadgeListKeys from '../consts/queriedBadgeListKeys';

const getLongestStringLength = badges => flow(
  flatMap(flow(
    badge => pick(queriedBadgeListKeys)(badge).value,
    values,
  )),
  uniq,
  reduce((longestStringLength, string) => (string.length > longestStringLength ? string.length : longestStringLength))(''),
)(badges);

export default getLongestStringLength;
