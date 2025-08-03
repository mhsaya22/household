
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import AssuredWorkloadIcon from '@mui/icons-material/AssuredWorkload';
import ShoppingCartCheckoutRoundedIcon from '@mui/icons-material/ShoppingCartCheckoutRounded';
import { Card, CardContent, Grid, Stack, Typography } from '@mui/material';


const MonthlySummary = () => {


  return (
    
    <Grid container spacing={2}>
      {/*収入 */}
      <Grid size={4}>
        <Card sx={{bgcolor:"blue",color:"white",borderRadius:"10px"}}>
          <CardContent sx={{padding:{xs:1,sm:2}}}>
            <Stack direction={"row"}>
              <CurrencyExchangeIcon sx={{fontSize:"2rem"}}/>
              <Typography>収入</Typography>
              </Stack>
              <Typography 
              textAlign={"right"} 
              variant='h5' 
              fontWeight={"fontWeightBold"}
              sx={{wordBreak: "break-word",fontSize:{xs:"8rem",sm:"1rem",md:"1.2rem"},
            }}
              >￥300</Typography>
          </CardContent>
        </Card>
      </Grid>
      {/*支出 */}
      <Grid size={4}>
        <Card sx={{bgcolor:"blue",color:"white",borderRadius:"10px"}}>
          <CardContent sx={{padding:{xs:1,sm:2}}}>
            <Stack direction={"row"}>
              <ShoppingCartCheckoutRoundedIcon sx={{fontSize:"2rem"}}/>
              <Typography>支出</Typography>
              </Stack>
              <Typography 
              textAlign={"right"} 
              variant='h5' 
              fontWeight={"fontWeightBold"}
              sx={{wordBreak: "break-word",fontSize:{xs:"8rem",sm:"1rem",md:"1.2rem"},
              }}
              >￥300</Typography>
          </CardContent>
        </Card>
      </Grid>
      {/*残高 */}
      <Grid size={4}>
        <Card sx={{bgcolor:"blue",color:"white",borderRadius:"10px"}}>
          <CardContent sx={{padding:{xs:1,sm:2}}}>
            <Stack direction={"row"}>
              <AssuredWorkloadIcon sx={{fontSize:"2rem"}}/>
              <Typography>残高</Typography>
              </Stack>
              <Typography 
              textAlign={"right"} 
              variant='h5' 
              fontWeight={"fontWeightBold"}
              sx={{wordBreak: "break-word",fontSize:{xs:"8rem",sm:"1rem",md:"1.2rem"},
            }}
              >￥300</Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>

  )
}

export default MonthlySummary