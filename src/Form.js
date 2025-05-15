import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Dialog from '@mui/material/Dialog';
import { useState } from 'react';


export default function TodoForm({ Open, setOpen, setTodo, todo, setOpenAlert }) {
    const [inputValue, setInputValue] = useState({
        title: '',
        details: '',
    });
    const handleClick = (type) => {
        setOpenAlert({
            open: true,
            Alert: type
        });
     };
    const handleSubmit = (event) => {
        event.preventDefault();
        let details
        if (inputValue.details === ''){
            details = 'لا يوجد تفاصيل'
        }else {
            details = inputValue.details
        }
        if (inputValue.title === ''){
            handleClick('empty');
        }else {
            setTodo((prev) => [
                ...prev,
                {
                    id: prev.length + 1,
                    title: inputValue.title,
                    details: details,
                    is_done: false,
                },
            ]);
            setOpen({ dialog: '', state: false });
            setInputValue({
                title: '',
                details: '',
            });
            handleClick('add');
        }
    };
    const handleEditSubmit = (event) => {
        event.preventDefault();
        if (inputValue.title === '' && inputValue.details === ''){
            handleClick('empty');
        }else if (inputValue.details === ''){
            const updatedTodo = todo.map((todoItem) => {
                if (todoItem.id === Open.id) {
                    return { ...todoItem, title: inputValue.title, };
                }
                return todoItem;
            });
            setTodo(updatedTodo);
            setInputValue({
                title: '',
                details: '',
            });
            handleClick('edit');
            setOpen({ dialog: '', state: false });

        }else if (inputValue.title === ''){
            const updatedTodo = todo.map((todoItem) => {
                if (todoItem.id === Open.id) {
                    return { ...todoItem, details: inputValue.details, };
                }
                return todoItem;
            });
            setTodo(updatedTodo);
            setInputValue({
                title: '',
                details: '',
            });
            handleClick('edit');
            setOpen({ dialog: '', state: false });
        }else {
            const updatedTodo = todo.map((todoItem) => {
                if (todoItem.id === Open.id) {
                    return { ...todoItem, details: inputValue.details, title: inputValue.title, };
                }
                return todoItem;
            });
            setTodo(updatedTodo);
            setInputValue({
                title: '',
                details: '',
            });
            handleClick('edit');
            setOpen({ dialog: '', state: false });
        }
    }
    const handleDeleteSubmit = (event) => {
        event.preventDefault();
        const updatedTodo = todo.filter((todoItem) => todoItem.id !== Open.id);
        setTodo(updatedTodo);
        setOpen({ dialog: '', state: false });
        handleClick('delete');
    }
    return (
        <>
            <Dialog open={Open.state && Open.dialog === 'add'} onClose={() => {}}>
                <Box style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Stack spacing={2} style={{ padding: '20px', borderRadius: '10px',width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <h1>إضافة مهمة</h1>
                        <form onSubmit={handleSubmit} >
                            <Grid xs={12} s>
                                <TextField onChange={(e)=> setInputValue({...inputValue , title :e.target.value})} id="standard-basic" label="عنوان" variant="standard" />
                            </Grid>
                            <Grid xs={12}>
                                <TextField onChange={(e)=> setInputValue({...inputValue , details :e.target.value})} id="standard-basic" label="التفاصيل" variant="standard" />
                            </Grid>
                            <Grid xs={12} style={{ display: 'flex', justifyContent:'start', marginTop:'10px'}}>
                                <Button type='submit' variant="text">إضافة</Button>
                                <Button onClick={()=> setOpen({dialog : "" , state : false})} variant="text">إلغاء</Button>
                            </Grid>
                        </form>
                    </Stack>
                </Box>
            </Dialog>
            <Dialog open={Open.state && Open.dialog === 'edit'} onClose={() => {}}>
                <Box style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Stack spacing={2} style={{ padding: '20px', borderRadius: '10px',width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <h1>تعديل مهمة</h1>
                        <form onSubmit={handleEditSubmit} >
                            <Grid xs={12} s>
                                <TextField onChange={(e)=> setInputValue({...inputValue , title :e.target.value})} id="standard-basic" label="عنوان" variant="standard" />
                            </Grid>
                            <Grid xs={12}>
                                <TextField onChange={(e)=> setInputValue({...inputValue , details :e.target.value})} id="standard-basic" label="التفاصيل" variant="standard" />
                            </Grid>
                            <Grid xs={12} style={{ display: 'flex', justifyContent:'start', marginTop:'10px'}}>
                                <Button type='submit' variant="text">تعديل</Button>
                                <Button onClick={()=> setOpen({dialog : "" , state : false})} variant="text">إلغاء</Button>
                            </Grid>
                        </form>
                    </Stack>
                </Box>
            </Dialog>
            <Dialog open={Open.state && Open.dialog === 'delete'} onClose={() => {}}>
                <Box style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Stack spacing={2} style={{ padding: '20px', borderRadius: '10px',width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <h1>هل تريد حذف المهمة</h1>
                        <Grid xs={12} style={{ display: 'flex', justifyContent:'start', marginTop:'10px'}}>
                            <Button onClick={handleDeleteSubmit}  type='submit' variant="text">حذف</Button>
                            <Button variant="text">إلغاء</Button>
                        </Grid>
                    </Stack>
                </Box>
            </Dialog>
        </>
    );
}