import React, { useState, useEffect } from 'react';

import axios from 'axios';

const client = axios.create({
	baseURL: 'https://jsonplaceholder.typicode.com/posts',
});

const App = () => {
	const [title, setTitle] = useState('');
	const [body, setBody] = useState('');
	const [posts, setPosts] = useState([]);

	// Kontrol submission
	const handleSubmit = (e) => {
		e.preventDefault();
		addPosts(title, body);
	};

	



	return (
		<div className="app">
			<nav>
				<h1>Post-it Note App</h1>
				<h3>Kelompok 5</h3>
			</nav>
			<div className="add-post-container">
				<form onSubmit={handleSubmit}>
					<input
						type="text"
						className="form-control"
						value={title}
						placeholder="Judul..."
						onChange={(e) => setTitle(e.target.value)}
					/>
					<textarea
						name=""
						className="form-control"
						id=""
						cols="2"
						rows="5"
						value={body}
						placeholder="Konten..."
						onChange={(e) => setBody(e.target.value)}
					></textarea>
					<button type="submit">Tambah Note</button>
				</form>
			</div>
			<div className="posts-container">
				<div className="post-card">
					<p>Simpan catatan yang kamu inginkan!</p>
				</div>
				<h2>Post-Note List</h2>
				
				{posts.map((post) => {
					return (
						<div className="post-card" key={post.id}>
							<h2 className="post-title">{post.title}</h2>
							<p className="post-body">{post.body}</p>
							<div className="button">
								<div className="delete-btn" onClick={() => deletePost(post.id)}>
									Hapus
								</div>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default App;
