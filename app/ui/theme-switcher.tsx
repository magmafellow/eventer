'use client';

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { BiSolidSun } from 'react-icons/bi'
import { PiMoonBold } from "react-icons/pi"


const ThemeSwitcher = () => {
	const [mounted, setMounted] = useState(false);
	const { theme, setTheme } = useTheme();

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) {
		return null;
	}

	return (
		<div className="flex justify-center items-center">
			<button className='text-2xl' onClick={() => {setTheme(theme === 'dark' ? 'light' : 'dark')}}>{ theme === 'dark' ? <BiSolidSun /> : <PiMoonBold />  }</button>
		</div>
	);
};

export default ThemeSwitcher;
