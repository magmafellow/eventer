'use client';
// theme-switcher.tsx is preferable. it is done with next-themes
// this is another method.

import { useState, useEffect, use } from 'react'
import { BiSolidSun } from 'react-icons/bi'
import { PiMoonBold } from "react-icons/pi"


const ThemeToggle = () => {
	const [darkTheme, setDarkTheme] = useState(false);

	useEffect(() => {
		const theme = localStorage.getItem('theme');
		if (theme === 'dark') {
			setDarkTheme(true);
		} else {
			setDarkTheme(false);
		}
	}, []);

	useEffect(() => {
		if (darkTheme) {
			document.documentElement.classList.add('dark');
			localStorage.setItem('theme', 'dark');
		} else {
			document.documentElement.classList.remove('dark');
			localStorage.setItem('theme', 'light');
		}
	}, [darkTheme]);

	return (
			<button onClick={() => setDarkTheme(!darkTheme)}>{darkTheme ? <BiSolidSun className='text-3xl' /> : <PiMoonBold className='text-3xl' />}</button>
	);
};

export default ThemeToggle