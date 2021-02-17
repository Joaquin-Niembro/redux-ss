import './App.css';
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { usersFetch } from './redux2/actions/usersActions';
function App({ Users, usersFetch }) {
	const [newUser, setNewUser] = useState({
		name: '',
		job: '',
	});
	console.log(Users);
	return (
		<div className='App'>
			<button onClick={usersFetch}>getUsers</button>
			<ul>
				{Users && Users.map((user) => (
					<div
						key={user.id}
						style={{
							display: 'flex',
							margin: 'auto',
							justifyContent: 'space-around',
							alignItems: 'center',
						}}
					>
						<li>{user.first_name ? user.first_name : user.name}</li>
						<button style={{ backgroundColor: 'red' }} onClick={() => {}}>
							Delete
						</button>
					</div>
				))}
			</ul>
			<input
				type='text'
				value={newUser.name}
				onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
			/>
			<input
				type='text'
				value={newUser.job}
				onChange={(e) => setNewUser({ ...newUser, job: e.target.value })}
			/>
			<button onClick={() => {}}>createUser</button>
		</div>
	);
}
const usersSelector = (state) => state.Users.users;
const mapStateToProps = (state) => {
	return {
		Users: usersSelector(state),
	};
};
const mapDispatchToProps = {
	usersFetch,
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
//High Order Component - HOC
/* function HOC(Component){
	return (
		<Component {...more functionality} />
	)
}*/
