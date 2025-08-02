import { Box, ListItem } from '@mui/material'
import React from 'react'
import Calender from '../Components/Calender'
import TransactionMenu from '../Components/TransactionMenu'
import TransactionForm from '../Components/TransactionForm'
import MonthlySummary from '../Components/MonthlySummary'

const Home = () => {
  return (
    <Box sx={{display: 'flex'}}>
      {/*左側のコンテンツ*/}
      <Box sx={{flexGrow:1}}>
        <MonthlySummary /> 
        <Calender />
      </Box>
      {/*右側のコンテンツ */}
      <Box>
        <TransactionMenu />
        <TransactionForm />

      </Box>
    </Box>
  )
}

export default Home