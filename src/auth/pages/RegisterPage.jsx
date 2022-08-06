import { Link as RouterLink } from 'react-router-dom';
// Material
import {
  Button,
  Grid,
  Link,
  TextField,
  Typography
} from '@mui/material';
// Icons
import { Google } from '@mui/icons-material';
import {AuthLayout} from '../layout/AuthLayout';

export const RegisterPage = () => {
  return (
    <AuthLayout title='Register'>
      <form>
        <Grid container>
          <Grid 
            item 
            xs={ 12 }
            sx={{ mt: 2 }}
          >
            <TextField 
              label='Name'
              type='text'
              placeholder='Your name'
              fullWidth
            />
          </Grid>
          <Grid 
            item 
            xs={ 12 }
            sx={{ mt: 2 }}
          >
            <TextField 
              label='Correo'
              type='email'
              placeholder='test@email.com'
              fullWidth
            />
          </Grid>
          <Grid 
            item 
            xs={ 12 }
            sx={{ mt: 2 }}
          >
            <TextField 
              label='Contraseña'
              type='password'
              placeholder='contraseña'
              fullWidth
            />
          </Grid>

          <Grid
            container
            spacing={ 2 }
            sx={{ mb: 2, mt: 1 }}
          >
            <Grid 
              item
              xs={ 12 }
            >
              <Button
                variant='contained'
                fullWidth
              >
                Crear cuenta
              </Button>
            </Grid>
          </Grid>

          <Grid container direction='row' justifyContent='end'>
            <Typography sx={{ mr: 1 }}>
              You have an account?
            </Typography>
            <Link
              component={ RouterLink }
              color='inherit'
              to='/auth/login'
            >
              login
            </Link>
          </Grid>

        </Grid>
      </form>
    </AuthLayout>
  )
}

