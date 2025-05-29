import '../assets/styles/bar.css'

export default function Bar({mobileMenuOpen}) {
    return (
        <>
            <article className={mobileMenuOpen ?'container showBar': 'container hideBar' }>

            </article>

        </>
    )
}