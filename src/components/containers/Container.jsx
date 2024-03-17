import { memo } from 'react'
import { clsx } from 'clsx'

import Header from './Header'
import Footer from './Footer'

import { headerSpacing } from '@/src/assets/constants/Constant'

function Container(props) {
    return (
        <>
            <Header className={headerSpacing} />
            <main className={clsx(headerSpacing, "mt-20 !py-10 h-full")}>
                {props.children}
            </main>
            <Footer />
        </>
    )
}

export default memo(Container)
