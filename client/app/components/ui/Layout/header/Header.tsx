import { FC } from 'react'
import styles from './Header.module.scss'
import Logo from './Logo'
import LoginForm from './login-form/LoginForm'

const Header: FC = () => {
	return (
		<header className={styles.header}>
			<Logo />
			<LoginForm />
		</header>
	)
}

export default Header
