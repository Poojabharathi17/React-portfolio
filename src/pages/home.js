import React from 'react';

class Home extends React.Component {
    render(){
        return(
            <div>
                <div class="container">
		<div class="navbar">
			<img src="" class="logo"/>
			<nav>
				<ul>
					<li><a href="#">Home</a></li>
					<li><a href="#">About Me</a></li>
					<li><a href="#">Projects</a></li>
					<li><a href="#">Contact</a></li>
				</ul>
			</nav>
				<img src="" class="cart"/>
		</div>
			<div class="content">
				<a href="assets/main.html" class="btn">About Me</a>
				<h1> Hello,<br></br>I am Pooja bharathi</h1>
				<p>currently pursuing my UG degree in<br></br> Computer Science and Engineering</p>
			</div>
			<img src="assets/img/img.png" class="feature-img"/>

	</div>

            </div>
       
            );
        }
    }
    export default Home;