'use client'
import * as React from 'react'
import { useCallback } from 'react'
import Box from '@mui/material/Box'
import { useColorScheme } from '@mui/material/styles'
import { IconButton, Tooltip } from '@mui/material'
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined'
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined'

export default function ModeSwitch() {
  const { mode, systemMode, setMode } = useColorScheme()
  const toggleDarkTheme = useCallback(() => {
    if (mode) {
      const currMode = mode === 'dark' ? 'light' : 'dark'
      setMode(currMode)
    }
  }, [mode, systemMode])
  return (
    <Box
      sx={{
        display: 'flex',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        bgcolor: 'background.default',
        color: 'text.primary',
        borderRadius: 1,
        p: 3,
        minHeight: '56px'
      }}
    >
      <Box sx={{ flexGrow: 0, pr: 2 }}>
        <Tooltip title="Toggle Theme">
          <IconButton size="large" color="inherit" onClick={() => toggleDarkTheme()} sx={{ p: 0 }}>
            {mode === 'dark' ? <DarkModeOutlinedIcon /> : <LightModeOutlinedIcon />}
          </IconButton>
        </Tooltip>
      </Box>
    </Box>
  )
}
