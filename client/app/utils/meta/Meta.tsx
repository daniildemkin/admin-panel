import Head from 'next/head'
import React from 'react'
import { IMeta } from './Meta.interface'

const Meta: React.FC<IMeta> = ({ title, description }) => {
	return (
		<>
			<Head>
				<title>{title}</title>
				<link rel="shortcut icon" href="/public/favicon.ico" type="" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta charSet="utf-8" />
				{description ? (
					<meta
						itemProp="description"
						name="description"
						content={description}
					/>
				) : (
					<meta name="robots" content="noindex, nofollow" />
				)}
			</Head>
		</>
	)
}

export default Meta
