'use client'

import NextLink from 'next/link'

import type { ComponentPropsWithoutRef } from 'react'

import cn from 'clsx'

import styles from './Contacts.module.scss'

import { Address } from '@/ui/address/Address'
import { Container } from '@/ui/container/Container'
import { Heading } from '@/ui/heading/Heading'
import { Schedule } from '@/ui/schedule/Schedule'
import { SocialLinks } from '@/ui/social-links/SocialLinks'

interface IContactsProps extends ComponentPropsWithoutRef<'section'> {
	prop?: string
}

export function Contacts({ className, ...props }: IContactsProps) {
	const LOCATION = { center: [55.751829, 37.859561], zoom: 16 }

	return (
		<section
			id='contacts'
			className={cn(styles.contacts, className)}
			{...props}
		>
			<Container className={styles.container}>
				<Heading className={styles.heading}>Контакты</Heading>
				<div className={styles.content}>
					<div className={styles.text}>
						<Address className={styles.address} />
						<Schedule className={styles.schedule} />
						<NextLink href='tel:+7 963 602 10 01'>+7 963 602 10 01</NextLink>
						<p>Следите за нами в социальных сетях</p>
						<SocialLinks />
					</div>
					<div className={styles.map}>
						<iframe
							src='https://yandex.ru/map-widget/v1/org/djanet_hair/55639407018/?indoorLevel=1&ll=37.854298%2C55.751391&utm_source=share&z=16.8'
							className={styles.ymap}
						/>
					</div>
				</div>
			</Container>
		</section>
	)
}