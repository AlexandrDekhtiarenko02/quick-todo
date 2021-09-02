import React, { FC, useRef, useState } from 'react'
import ClickAwayListener from '@material-ui/core/ClickAwayListener'
import Grow from '@material-ui/core/Grow'
import Icon from '@material-ui/core/Icon'
import IconButton from '@material-ui/core/IconButton'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import MenuItem from '@material-ui/core/MenuItem'
import MenuList from '@material-ui/core/MenuList'
import Paper from '@material-ui/core/Paper'
import Popper from '@material-ui/core/Popper'
import { useDispatch } from 'react-redux'
import { ITAG } from '../../redux/types/tagsTypes'
import { removeTag } from '../../redux/action-creators/tags'
import { getCurrentLanguageTranslation } from '../../utils/languages'
import { languages } from '../../language'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { useStyles } from './tagItemStyles'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'
import LocalOfferIcon from '@material-ui/icons/LocalOffer'

interface IPROPS {
	tag: ITAG
}

export const TagItem: FC<IPROPS> = ({ tag }) => {
	const dispatch = useDispatch()
	const classes = useStyles()
	const lang = useTypedSelector(state => state.settings.settings.language.toString())
	const anchorRef = useRef<HTMLButtonElement>(null)

	const [openTagMenu, setOpenTagMenu] = useState<boolean>(false)

	const handleOpenTagMenu = () => setOpenTagMenu(true)
	const handleCloseTagMenu = (event: React.MouseEvent<EventTarget>) => {
		if (anchorRef.current && anchorRef.current.contains(event.target as HTMLElement)) {
			return
		}
		setOpenTagMenu(false)
	}
	const onRemoveTag = () => dispatch(removeTag(tag.id))

	return (
		<ListItem className={classes.listItem}>
			<Icon>
				<LocalOfferIcon style={{ color: tag.color }} fontSize='small' />
			</Icon>
			<ListItemText primary={tag.title} />
			<IconButton ref={anchorRef} aria-haspopup='true' onClick={handleOpenTagMenu}>
				<MoreHorizIcon />
			</IconButton>
			<Popper open={openTagMenu} anchorEl={anchorRef.current} role={undefined} transition style={{ zIndex: 10000 }}>
				{({ TransitionProps, placement }) => (
					<Grow {...TransitionProps} style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}>
						<Paper>
							<ClickAwayListener onClickAway={handleCloseTagMenu}>
								<MenuList>
									<MenuItem onClick={onRemoveTag}>{getCurrentLanguageTranslation(languages.removeTag, lang)}</MenuItem>
								</MenuList>
							</ClickAwayListener>
						</Paper>
					</Grow>
				)}
			</Popper>
		</ListItem>
	)
}
