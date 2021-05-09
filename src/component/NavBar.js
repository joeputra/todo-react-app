import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import MenuIcon from '@material-ui/icons/Menu'
import SearchIcon from '@material-ui/icons/Search'
import Typography from '@material-ui/core/Typography'
import { Toolbar, IconButton, fade, makeStyles } from '@material-ui/core'



const useStyles = makeStyles((theme)=> ({
    root: {
        flexGrow: 1,
    },
    menuBottom: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto'
    }
}))


const NavBar =  () => { 
    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                        <IconButton 
                            edge="start"
                            className={NavBar.menuButton}
                            color="inherit"
                            aria-label="open drawer"
                        >
                        <MenuIcon />
                        </IconButton>
                        <Typography className={NavBar.title} variant="h6" noWrap> 
                            Todo-AppS
                        </Typography>
                        <div className={NavBar.search}>
                            <div className={NavBar.searchIcon}>
                            <SearchIcon />
                            </div>
                        </div>
                </Toolbar>
            </AppBar>
        </div>
    )
}
export default NavBar
