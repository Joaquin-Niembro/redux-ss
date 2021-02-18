import './App.css';
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { getUsers, createUser, deleteUser } from './redux/actions/usersActions';
function App({ Users = [], getUsers, createUser, deleteUser }) {
	const [newUser, setNewUser] = useState({
		name: '',
		job: '',
	});

	return (
		<div className='App'>
			<button onClick={getUsers}>getUsers</button>
			<ul>
				{Users &&
					Users.map((user) => (
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
							<button
								style={{ backgroundColor: 'red' }}
								onClick={() => deleteUser(user.id)}
							>
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
			<button onClick={() => createUser(newUser)}>createUser</button>
		</div>
	);
}
const usersSelector = (state) => state.Users;
const mapStateToProps = (state) => {
	return {
		Users: usersSelector(state),
	};
};
const mapDispatchToProps = {
	getUsers,
	createUser,
	deleteUser,
};
export default connect(mapStateToProps, mapDispatchToProps)(App);

//High Order Component - HOC
/* function HOC(Component){
	return (
		<Component {...more functionality} />
	)
}*/
