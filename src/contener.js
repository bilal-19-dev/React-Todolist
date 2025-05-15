import Container from '@mui/material/Container';
import './App.css';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import TodoList from './todoList';
import TodoForm from './Form';
import { useState, useEffect } from 'react';
import Feedbac from './Feedbac';


export default function Contener() {
    const [openAlert, setOpenAlert] = useState({open: false, alert: ''});
    const [open, setOpen] = useState({dialog : "" , state : false, id: 0});
    const [todo, setTodo] = useState(() => {
        return JSON.parse(localStorage.getItem('todo')) || [];
    });
    useEffect(() => {
        localStorage.setItem('todo', JSON.stringify(todo)); }, [todo]);
    const [todotype, setTodotype] = useState({type : 'all'});
    const [search, setSearch] = useState({search : ''});
    return (
        <>
            <Container maxWidth="xs" style={{display: 'flex', alignItems: 'center', height: '100vh'}}>
                <Box sx={{ flexGrow: 1 }} style={{backgroundColor: 'white', padding: '20px', borderRadius: '10px'}}>
                    <Grid container spacing={2}>
                        <Grid size={12}>
                            <h1 style={{textDecoration : 'solid 5px rgb(0, 0, 0)', color : 'black'}}>مهماتي</h1>
                        </Grid>
                        <Grid size={12}>
                            <Stack
                                direction={{ sm: 'row'}}
                                style={{height : '50px'}}
                            >
                                <Button onClick={() => setOpen({dialog: 'add', state: true})} style={{width : "40%", padding : '28px'}} variant="contained">إضافة</Button>
                                <TextField onChange={(e) => setSearch({search :e.target.value})} id="outlined-basic" label="عنوان المهمة" variant="outlined" style={{width:'100%', marginLeft:'10px'}}/>
                            </Stack>
                        </Grid>
                        <Grid size={12}>
                            <Button onClick={() => setTodotype({type : 'all'})} variant="outlined">الكل</Button>
                            <Button onClick={() => setTodotype({type : 'done'})} variant="outlined">منجز</Button>
                            <Button onClick={() => setTodotype({type : 'notdone'})} variant="outlined">غير منجز</Button>
                        </Grid>
                        <Grid size={12}>
                            <TodoList todo={todo} setTodo={setTodo} setOpen={setOpen} typetodo={todotype} search={search} setOpenAlert={setOpenAlert}/>
                        </Grid>
                    </Grid>
                    <TodoForm Open={open} setOpen={setOpen} setTodo={setTodo} todo={todo} setOpenAlert={setOpenAlert}/>
                </Box>
            </Container>
            <Feedbac openAlert={openAlert} setOpenAlert={setOpenAlert}/>
        </>
    );
}