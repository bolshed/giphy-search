<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN">
<html>
<head>
	<meta http-equiv="content-type" content="text/html; charset=utf-8"/>
	<meta name="generator" content="LibreOffice 6.0.7.3 (Linux)"/>
	<meta name="created" content="2020-02-07T17:05:38.253193806"/>
	<meta name="changed" content="2020-02-07T17:05:54.042968515"/>
</head>
<body lang="en-US" dir="ltr">
<h1>Giphy Search 
</h1>
<p>Single page Giphy search app</p>
<h2 class="western"><a name="user-content-to-run-the-applocally-please-type"></a>
To run the app locally please type:</h2>
<ul>
	<li/>
<pre class="western" style="margin-bottom: 0.2in">npm I </pre>
	<li/>
<pre class="western" style="margin-bottom: 0.2in">npm start or yarn start</pre>
</ul>
<h2 class="western"><a name="user-content-dependencies"></a>Dependencies:</h2>
<ul>
	<li/>
<p>Reactstrap for the styling</p>
	<li/>
<p>React-loader-spinner for the loading indicator</p>
</ul>
<h2 class="western"><a name="user-content-contents"></a>Contents:</h2>
<ul>
	<li/>
<p><strong>App.js:</strong> The main component where the
	fetching happens. 
	</p>
	<p>- using React Hooks</p>
	<p>- fetches the trending Giphy images on load</p>
	<p>- 2 separate fetch functions – one for the initial load,
	another one for the search</p>
	<p>- conditional rendering with indicator while loading 
	</p>
	<li/>
<p><strong>SearchInput.jsx:</strong> The search input bar and
	button</p>
	<p>- manages its own state for the search term which is being
	entered</p>
	<p>- renders a Reactstrap search bar and button</p>
	<p>- search term is sent on click on the button or enter key</p>
	<li/>
<p><strong>Results.jsx:</strong> container showing the results
	of the search (or the initial fetch with Giphy trending images)</p>
	<p>- maps through the received data and returns the images</p>
</ul>
<h2 class="western"><a name="user-content-notes"></a>Notes:</h2>
<ul>
	<li/>
<p>Since the project is quite small, all the styling is in the
	App.css file</p>
</ul>
</body>
</html>
