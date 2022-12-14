import { Box, Button, Grid, TextField, Typography } from '@material-ui/core';
import React,{ChangeEvent, useState} from 'react';
import { Link } from 'react-router-dom';
import useLocalStorage from 'react-use-localstorage';
import {api} from '../../services/Service';
import UserLogin from '../../models/UserLogin'
import './Login.css';

function Login () {

    let history = userHistory();
    const [token,setToken] = useLocalStorage('token');
    const [userLogin, setUserLogin] = useState <UserLogin>(
        {
            id: 0,
            usuario: '',
            senha: '',
            token: ''


    })
    function updatedModel(e: ChangeEvent<HTMLInputElement>) {

        setUserLogin({
            ...userLogin, 
            [e.target.name]: e.target.value
        })
    }

            userEffect(()=>{
                if(token !=''){
                    history.push('/home')
                }
            })

    async function onSubmit(e: ChangeEvent<HTMLFormElement>){
        e.preventDefault();
        try {
            const resposta = await api.post('/usuarios/logar', userLogin)
            setToken(resposta.data.token)
            
            alert('Usuário logado com sucesso');
        } catch (error) {
            
            alert('Dados do usuário inconsistentes. Erro ao logar!')
        }

        console.log('userlogin' + Object.values(userLogin));
    }


    return (
        <Grid container direction='row' justifyContent='center' alignItems='center'>
            <Grid alignItems='center'xs={ 6 }>
                <Box paddingX={ 20 }>
                    <form onSubmit={onSubmit}>
                        <Typography variant='h3' gutterBottom color='textPrimary' component='h3' align='center' className='textos1'>Entrar</Typography>
                        <TextField value={userLogin.usuario} onChange={(e:ChangeEvent<HTMLInputElement>)=>updatedModel(e)} id='usuario' label='usuario' variant='outlined' name='usuario' margin='normal' fullWidth></TextField>
                        <TextField value={userLogin.senha} onChange={(e:ChangeEvent<HTMLInputElement>)=>updatedModel(e)} id='senha' label='senha' variant='outlined' name='senha' margin='normal' type='password' fullWidth></TextField>
                        <Box marginTop = { 2 } textAlign='center'>                            
                                <Button type='submit' variant='contained' color='primary'>
                                    Logar
                                </Button>
                         
                        </Box>
                    </form>
                    <Box display='flex' justifyContent='center' marginTop={ 2 }>
                        <Box marginRight={ 1 }>
                            <Typography variant='subtitle1' gutterBottom align='center'>Não tem uma conta?</Typography>
                        </Box>
                        <Link to='/cadastrousuario'>
                            <Typography variant='subtitle1' gutterBottom align='center' className='textos1'>Cadastre-se</Typography>
                        
                        </Link>
                    </Box>

                </Box>

            </Grid>
            <Grid xs={ 6 } className='imagem'>

            </Grid>
        </Grid>
    )
}

export default Login;

function userEffect(arg0: () => void) {
    throw new Error('Function not implemented.');
}
