<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN">
<html>
<body lang="en-US" dir="ltr">
<div id="readme" dir="ltr">
	<h1><a name="user-content-create-react-app--"></a><font face="albany, sans-serif">Giphy
	Search </font>
	</h1>
	<p><font face="albany, sans-serif">Single page Giphy search app</font></p>
	<h2 class="western"><font face="albany, sans-serif">To run the app
	locally please type:</font></h2>
	<ul>
		<li/>
<pre class="western" style="margin-bottom: 0.2in"><font face="albany, sans-serif"><font size="3" style="font-size: 12pt">npm I </font></font></pre>
		<li/>
<pre class="western" style="margin-bottom: 0.2in"><font face="albany, sans-serif"><font size="3" style="font-size: 12pt">npm start or yarn start</font></font></pre>
	</ul>
	<h2 class="western"><font face="albany, sans-serif">Dependencies:</font></h2>
	<ul>
		<li/>
<p><font face="albany, sans-serif">Reactstrap for the styling</font></p>
		<li/>
<p><font face="albany, sans-serif">React-loader-spinner for
		the loading indicator</font></p>
	</ul>
	<h2 class="western"><font face="albany, sans-serif">Contents:</font></h2>
	<ul>
		<li/>
<p><strong><font face="albany, sans-serif">App.js:</font></strong>
		<font face="albany, sans-serif">The main component where the
		fetching happens. </font>
		</p>
		<p><font face="albany, sans-serif">- using React Hooks</font></p>
		<p><font face="albany, sans-serif">- fetches the trending Giphy
		images on load</font></p>
		<p><font face="albany, sans-serif">- 2 separate fetch functions –
		one for the initial load, another one for the search</font></p>
		<p><font face="albany, sans-serif">- conditional rendering with
		loading indicator while loading </font>
		</p>
		<li/>
<p><strong><font face="albany, sans-serif">SearchInput.jsx:</font></strong>
		<font face="albany, sans-serif">The search input bar and button</font></p>
		<p><font face="albany, sans-serif">- manages its own state for the
		search term which is being entered</font></p>
		<p><font face="albany, sans-serif">- renders a Reactstrap search
		bar and button</font></p>
		<p><font face="albany, sans-serif">- search term is sent on click
		on the button or enter key</font></p>
		<li/>
<p><strong><font face="albany, sans-serif">Results.jsx:</font></strong>
		<font face="albany, sans-serif">container showing the results of
		the search (or the initial fetch with Giphy trending images)</font></p>
		<p><font face="albany, sans-serif">- maps through the received data
		and returns the images</font></p>
	</ul>
	<h2 class="western"><font face="albany, sans-serif">Notes:</font></h2>
	<ul>
		<li/>
<p><font face="albany, sans-serif">Since the project is quite
		small, all the styling is in the App.css file</font></p>
		<li/>
<p><font face="albany, sans-serif">The loading indicator and
		error handling need more work but this is an area in which I have
		more to learn</font></p>
	</ul>
	<p><font face="albany, sans-serif"><br/>
</font><br/>
<br/>
</div>
</body>
</html>
