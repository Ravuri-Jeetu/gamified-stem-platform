import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {
  Container,
  Typography,
  Box,
  TextField,
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  IconButton,
  InputAdornment,
} from '@mui/material';
import { Edit, Delete, Search } from '@mui/icons-material';
import { styled } from '@mui/system';
import Logo from '../../components/common/Logo';

const StyledContainer = styled(Container)(({ theme }) => ({
  marginTop: '32px',
  marginBottom: '32px',
}));

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: '32px',
  display: 'flex',
  flexDirection: 'column',
  gap: '24px',
}));

const AdminUserList = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');

  // Mock data for users (replace with actual data fetching)
  const [users, setUsers] = useState([
    { id: '1', name: 'John Doe', email: 'john.doe@example.com', role: 'Student' },
    { id: '2', name: 'Jane Smith', email: 'jane.smith@example.com', role: 'Instructor' },
    { id: '3', name: 'Peter Jones', email: 'peter.jones@example.com', role: 'Admin' },
  ]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.role.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleEdit = (id) => {
    navigate(`/admin/users/${id}`);
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this user?')) {
      setUsers(users.filter((user) => user.id !== id));
    }
  };

  return (
    <StyledContainer maxWidth="lg">
      <Logo />
      <Typography variant="h4" component="h1" gutterBottom align="center">
        {t('adminUserList.title')}
      </Typography>
      <StyledPaper elevation={3}>
        <Typography variant="h6" gutterBottom>
          {t('adminUserList.description')}
        </Typography>
        <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
          <Button
            variant="contained"
            color="primary"
            onClick={() => navigate('/admin/users/new')}
          >
            {t('adminUserList.addUser')}
          </Button>
          <TextField
            variant="outlined"
            placeholder={t('adminUserList.search')}
            value={searchTerm}
            onChange={handleSearchChange}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Search />
                </InputAdornment>
              ),
            }}
          />
        </Box>

        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>{t('adminUserList.name')}</TableCell>
                <TableCell>{t('adminUserList.email')}</TableCell>
                <TableCell>{t('adminUserList.role')}</TableCell>
                <TableCell align="right">{t('adminUserList.actions')}</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredUsers.length > 0 ? (
                filteredUsers.map((user) => (
                  <TableRow key={user.id}>
                    <TableCell>{user.name}</TableCell>
                    <TableCell>{user.email}</TableCell>
                    <TableCell>{user.role}</TableCell>
                    <TableCell align="right">
                      <IconButton color="primary" onClick={() => handleEdit(user.id)}>
                        <Edit />
                      </IconButton>
                      <IconButton color="error" onClick={() => handleDelete(user.id)}>
                        <Delete />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={4} align="center">
                    {t('adminUserList.noUsers')}
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </StyledPaper>
    </StyledContainer>
  );
};

export default AdminUserList;