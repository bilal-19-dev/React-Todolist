import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DoneOutlinedIcon from '@mui/icons-material/DoneOutlined';
import { Collapse, collapseClasses } from '@mui/material';
import { useState, useMemo } from 'react';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';



export default function TodoList({ todo, setTodo, setOpen, typetodo, search, setOpenAlert }) {
  const [Collapsed, setCollapsed] = useState({states : false , id: 0});
  const handleClick = (type) => {
    setOpenAlert({
        open: true,
        Alert: type
    });
  };
  const TodoListAll = useMemo (() => {
    return todo.filter((item) => {
      if (search.search === '') {
        return item
      }else {
        return (item.title.includes(search.search) || item.details.includes(search.search));
      }
      }).map((item) => {
      return (
        <Grid item xs={12} key={item.id}>
          <Box
            onMouseEnter={() => {
              setCollapsed({...Collapsed, states: true , id: item.id});
            }}
            onMouseLeave={() => {
              setCollapsed({...Collapsed, states: false , id: item.id});
            }}
            sx={{
              width: '100%',
              flexGrow: 1,
              backgroundColor: 'primary.main',
              borderRadius: '10px',
            }}
            style={{ marginTop: '10px' }}
          >
            <Collapse in={Collapsed.states && Collapsed.id === item.id} collapsedSize={50}>
              <Stack spacing={2} direction="row" style={{ padding: '10px' }}>
                <Grid
                  size={5}
                  style={{ display: 'flex', alignItems: 'center', height:'30px'}}
                >
                  <Stack direction="row" spacing={0}>
                    <button onClick={()=> setOpen({ dialog: 'delete', state: true, id: item.id})} className='btnIcon' style={{color :'red' , borderRadius : '50%', border : 'solid 1px red' , lineHeight :'0px', margin : '2px'}}> <DeleteOutlinedIcon/></button>
                    <button onClick={() => {
                        setOpen({ dialog: 'edit', state: true, id: item.id });
                      }}
                       className='btnIcon' style={{color :'blue' , borderRadius : '50%', border : 'solid 1px blue' , lineHeight :'0px', margin : '2px'}}> <EditOutlinedIcon /></button>
                      {todo.find(donitem => donitem.id === item.id).is_done ? 
                        <button onClick={() => {
                        const updatedTodo = todo.map((todoItem) => {
                          if (todoItem.id === item.id) {
                            return { ...todoItem, is_done: !todoItem.is_done };
                          }
                          handleClick('notdone');
                          return todoItem;
                        });
                        setTodo(updatedTodo);
                        }}className='btnIcon' style={{color :'red' , borderRadius : '50%', border : 'solid 1px red' , lineHeight :'0px', margin : '2px'}}> <CancelOutlinedIcon/></button> :
                        <button onClick={() => {
                        const updatedTodo = todo.map((todoItem) => {
                          if (todoItem.id === item.id) {
                            return { ...todoItem, is_done: !todoItem.is_done };
                          }
                          handleClick('done');
                          return todoItem;
                        });
                        setTodo(updatedTodo);
                        }}
                       className='btnIcon' style={{color :'green' , borderRadius : '50%', border : 'solid 1px green' , lineHeight :'0px', margin : '2px'}}> <DoneOutlinedIcon/></button>
                    }
                  </Stack>
                </Grid>
                <Grid size={7} style={{ textAlign: 'right' }}>
                  <p style={{ margin: '0' }}>{item.title}</p>
                  <p style={{ margin: '0' }}>{item.details}</p>
                </Grid>
              </Stack>
            </Collapse>
          </Box>
        </Grid>
        );
      });
    }, [todo, Collapsed]);
    const TodoListDone = useMemo (() => {
      return todo.filter((item) => {
        if (search.search === '') {
          return item.is_done === true;
        }else {
          return item.is_done === true && (item.title.includes(search.search) || item.details.includes(search.search));
        }
      }).map((item) => {
        return (
          <Grid item xs={12} key={item.id}>
            <Box
              onMouseEnter={() => {
                setCollapsed({...Collapsed, states: true , id: item.id});
              }}
              onMouseLeave={() => {
                setCollapsed({...Collapsed, states: false , id: item.id});
              }}
              sx={{
                width: '100%',
                flexGrow: 1,
                backgroundColor: 'primary.main',
                borderRadius: '10px',
              }}
              style={{ marginTop: '10px' }}
            >
              <Collapse in={Collapsed.states && Collapsed.id === item.id} collapsedSize={50}>
                <Stack spacing={2} direction="row" style={{ padding: '10px' }}>
                  <Grid
                    size={5}
                    style={{ display: 'flex', alignItems: 'center', height:'30px'}}
                  >
                    <Stack direction="row" spacing={0}>
                      <button onClick={()=> setOpen({ dialog: 'delete', state: true, id: item.id})} className='btnIcon' style={{color :'red' , borderRadius : '50%', border : 'solid 1px red' , lineHeight :'0px', margin : '2px'}}> <DeleteOutlinedIcon/></button>
                      <button onClick={() => {
                        setOpen({ dialog: 'edit', state: true, id: item.id });
                      }}
                       className='btnIcon' style={{color :'blue' , borderRadius : '50%', border : 'solid 1px blue' , lineHeight :'0px', margin : '2px'}}> <EditOutlinedIcon /></button>
                      <button onClick={() => {
                      const updatedTodo = todo.map((todoItem) => {
                        if (todoItem.id === item.id) {
                          return { ...todoItem, is_done: !todoItem.is_done };
                        }
                        handleClick('notdone');
                        return todoItem;
                      });
                      setTodo(updatedTodo);
                      }}className='btnIcon' style={{color :'red' , borderRadius : '50%', border : 'solid 1px red' , lineHeight :'0px', margin : '2px'}}> <CancelOutlinedIcon/></button> 
                    </Stack>
                  </Grid>
                  <Grid size={7} style={{ textAlign: 'right' }}>
                    <p style={{ margin: '0' }}>{item.title}</p>
                    <p style={{ margin: '0' }}>{item.details}</p>
                  </Grid>
                </Stack>
              </Collapse>
            </Box>
          </Grid>
        );
      
    });
    }, [todo, Collapsed]);
    const TodoListNotDone = useMemo (() => {
      return todo.filter((item) => {
      if (search.search === '') {
        return item.is_done === false;
      }else {
        return item.is_done === false && (item.title.includes(search.search) || item.details.includes(search.search));
      }
      }).map((item) => {
        return (
          <Grid item xs={12} key={item.id}>
            <Box
              onMouseEnter={() => {
                setCollapsed({...Collapsed, states: true , id: item.id});
              }}
              onMouseLeave={() => {
                setCollapsed({...Collapsed, states: false , id: item.id});
              }}
              sx={{
                width: '100%',
                flexGrow: 1,
                backgroundColor: 'primary.main',
                borderRadius: '10px',
              }}
              style={{ marginTop: '10px' }}
            >
              <Collapse in={Collapsed.states && Collapsed.id === item.id} collapsedSize={50}>
                <Stack spacing={2} direction="row" style={{ padding: '10px' }}>
                  <Grid
                    size={5}
                    style={{ display: 'flex', alignItems: 'center', height:'30px'}}
                  >
                    <Stack direction="row" spacing={0}>
                      <button onClick={()=> setOpen({ dialog: 'delete', state: true, id: item.id})} className='btnIcon' style={{color :'red' , borderRadius : '50%', border : 'solid 1px red' , lineHeight :'0px', margin : '2px'}}> <DeleteOutlinedIcon/></button>
                      <button onClick={() => {
                        setOpen({ dialog: 'edit', state: true, id: item.id });
                      }}
                       className='btnIcon' style={{color :'blue' , borderRadius : '50%', border : 'solid 1px blue' , lineHeight :'0px', margin : '2px'}}> <EditOutlinedIcon /></button>
                      <button onClick={() => {
                        const updatedTodo = todo.map((todoItem) => {
                          if (todoItem.id === item.id) {
                            return { ...todoItem, is_done: !todoItem.is_done };
                          }
                          return todoItem;
                        });
                        handleClick('done');
                        setTodo(updatedTodo);
                      }}
                       className='btnIcon' style={{color :'green' , borderRadius : '50%', border : 'solid 1px green' , lineHeight :'0px', margin : '2px'}}> <DoneOutlinedIcon/></button>
                    </Stack>
                  </Grid>
                  <Grid size={7} style={{ textAlign: 'right' }}>
                    <p style={{ margin: '0' }}>{item.title}</p>
                    <p style={{ margin: '0' }}>{item.details}</p>
                  </Grid> 
                </Stack>
              </Collapse>
            </Box>
          </Grid>
        );
    }
    );
    }, [todo, Collapsed]);
    const notdone = () => { 
      return (
        <Grid item xs={12}>
          <Box
            sx={{
              width: '100%',
              flexGrow: 1,
              backgroundColor: 'primary.main',
              borderRadius: '10px',
            }}
            style={{ marginTop: '10px' }}
          >
            <Stack spacing={2} direction="row" style={{ padding: '10px' }}>
              <Grid size={12} style={{ textAlign: 'center' }}>
                <h1 style={{ margin: '0' }}> لا توجد مهام منجزة</h1>
              </Grid>
            </Stack>
          </Box>
        </Grid>
      );
    };
    const notNotdone = () => { 
      return (
        <Grid item xs={12}>
          <Box
            sx={{
              width: '100%',
              flexGrow: 1,
              backgroundColor: 'primary.main',
              borderRadius: '10px',
            }}
            style={{ marginTop: '10px' }}
          >
            <Stack spacing={2} direction="row" style={{ padding: '10px' }}>
              <Grid size={12} style={{ textAlign: 'center' }}>
                <h1 style={{ margin: '0' }}> كل المهام انجزة</h1>
              </Grid>
            </Stack>
          </Box>
        </Grid>
      );
    };
    const nothing = () => { 
      return (
        <Grid item xs={12}>
          <Box
            sx={{
              width: '100%',
              flexGrow: 1,
              backgroundColor: 'primary.main',
              borderRadius: '10px',
            }}
            style={{ marginTop: '10px' }}
          >
            <Stack spacing={2} direction="row" style={{ padding: '10px' }}>
              <Grid size={12} style={{ textAlign: 'center' }}>
                <h1 style={{ margin: '0' }}> لا توجد مهام</h1>
              </Grid>
            </Stack>
          </Box>
        </Grid>
      );
    }

    return (
      <>
        {typetodo.type === 'all' ? TodoListAll : typetodo.type === 'done' ? TodoListDone : TodoListNotDone}
        {typetodo.type === 'done' && TodoListDone.length === 0 && notdone()}
        {typetodo.type === 'notdone' && TodoListNotDone.length === 0 && notNotdone()}
        {typetodo.type === 'all' && todo.length === 0 && nothing()}
      </>
    );
  }