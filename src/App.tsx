import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import SignInTest from 'components/Auth/SignInTest';
import { RootState } from 'redux/reducer';
import { reduxUser, reduxSignOut } from 'types/reduxTypes';

import { signOut } from 'redux/actions/userAction';

import './App.css';
import Navbar from 'components/Nav/Navbar';
import Aside from 'components/Aside/Aside';
interface reduxProps {
  user: reduxUser;
  signOut: reduxSignOut;
}
function App({ user, signOut }: reduxProps) {
  const signOutHandler = () => {
    signOut();
  };
  return (
    <div className='App'>
      {user.userName === '' ? (
        <SignInTest />
      ) : (
        <>
          <Navbar />
          <Aside />
          {/* <TextArea /> */}
        </>
      )}
    </div>
  );
}

export default connect(
  (state: RootState) => ({
    user: state.userReducer.isLoggin,
  }),
  (dispatch: Dispatch) => ({
    signOut: () => dispatch(signOut()),
  })
)(App);
