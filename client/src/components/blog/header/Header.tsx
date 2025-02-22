import { Link, Pathnames } from '@/i18n/routing'
import ModeSwitch from '@/components/ModeSwitch.tsx'
import Box from '@mui/material/Box'

const menuItems: { name: string; href: Pathnames }[] = [
  {
    name: 'Home',
    href: '/'
  },
  {
    name: 'Blog',
    href: '/blog'
  },
  {
    name: 'About',
    href: '/about'
  },
  {
    name: 'Contact',
    href: '/contact'
  }
]

export default function Header() {
  return (
    <Box>
      <ModeSwitch />
      <h1>
        {menuItems.map((item) => (
          <Link key={item.href} href={item.href}>
            {item.name}
          </Link>
        ))}
      </h1>
    </Box>
  )
}
