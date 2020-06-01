import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import First from './First';
import {clickCounter} from '../../modules/first/actions';
import {dataSelector} from '../../modules/first/selectors';

export default connect(
  (state) => ({
    data: dataSelector(state),
  }),
  (dispatch) => ({
    clickCounter: bindActionCreators(clickCounter, dispatch),
  }),
)(First);
