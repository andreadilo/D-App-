import { Container, Link, Typography } from '@mui/material'

const styles = {
	footer: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		paddingY: 1,
		backgroundColor: '#222',
		color: '#fff',
	},
}

const AppFooter = () => (
	<footer>
		<Container maxWidth="false" sx={styles.footer}>
			
		</Container>
	</footer>
)

export default AppFooter
