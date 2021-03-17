import { connect } from 'react-redux';
import SignInForm from 'src/components/Connection/SignInForm';

import {
  trySignIn,
  setSignInControlMessage,
  validateSignInEmail,
  toggleConnectionVisibility,
} from 'src/actions/auth';

const mapStateToProps = ({ other: { messageParams }}) => ({
  messageParams,
});

const mapDispatchToProps = (dispatch) => ({
  trySignIn: () => dispatch(trySignIn()),
  checkEmptyField:
  (controlMessageInfo) => dispatch(setSignInControlMessage(controlMessageInfo)),
  validateInput: ({ message, value }) => dispatch(validateSignInEmail({ message, email: value })),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignInForm);
