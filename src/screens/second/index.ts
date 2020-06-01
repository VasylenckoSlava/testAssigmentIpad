import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import Second from './Second';
// import {clickCounter} from '~/modules/home/actions.js';
// import {dataSelector} from '~/modules/home/selectors.js';
export default Second;

// export default connect(
//   (state) => ({
//     data: dataSelector(state),
//   }),
//   (dispatch) => ({
//     clickCounter: bindActionCreators(clickCounter, dispatch),
//   }),
// )(First);
