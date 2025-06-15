import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

export default function Feedbac({ openAlert, setOpenAlert }) {
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenAlert({
      open: false,
      Alert: ''
    });
  };

  return (
    <div>
        
        <Snackbar open={openAlert.open && openAlert.Alert === 'add'} autoHideDuration={6000} onClose={handleClose}>
            <Alert
            onClose={handleClose}
            severity="success"
            variant="filled"
            sx={{ width: '100%' }}
            >
                تم إضافة المهمة بنجاح
            </Alert>
        </Snackbar>
        <Snackbar open={openAlert.open && openAlert.Alert === 'edit'} autoHideDuration={6000} onClose={handleClose}>
            <Alert
            onClose={handleClose}
            severity="success"
            variant="filled"
            sx={{ width: '100%' }}
            >
                تم تعديل المهمة بنجاح
            </Alert>
        </Snackbar>
        <Snackbar open={openAlert.open && openAlert.Alert === 'delete'} autoHideDuration={6000} onClose={handleClose}>
            <Alert
            onClose={handleClose}
            severity="error"
            variant="filled"
            sx={{ width: '100%' }}
            >
                تم حذف المهمة بنجاح
            </Alert>
        </Snackbar>
        <Snackbar open={openAlert.open && openAlert.Alert === 'done'} autoHideDuration={6000} onClose={handleClose}>
            <Alert
            onClose={handleClose}
            severity="success"
            variant="filled"
            sx={{ width: '100%' }}
            >
                تم إنجاز المهمة بنجاح
            </Alert>
        </Snackbar>
        <Snackbar open={openAlert.open && openAlert.Alert === 'notdone'} autoHideDuration={6000} onClose={handleClose}>
            <Alert
            onClose={handleClose}
            severity="error"
            variant="filled"
            sx={{ width: '100%' }}
            >
                تم إلغاء إنجاز المهمة بنجاح
            </Alert>
        </Snackbar>
        <Snackbar open={openAlert.open && openAlert.Alert === 'empty'} autoHideDuration={6000} onClose={handleClose}>
            <Alert
            onClose={handleClose}
            severity="warning"
            variant="filled"
            sx={{ width: '100%' }}
            >
                لا يمكن ترك الحقول فارغة
            </Alert>
        </Snackbar>
    </div>
  );
}
