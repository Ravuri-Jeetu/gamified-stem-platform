import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {
  Container,
  Typography,
  Box,
  TextField,
  Button,
  Paper,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
} from '@mui/material';
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

const AdminUserForm = () => {
  const { t } = useTranslation();
  const { id } = useParams();
  const navigate = useNavigate();
  const isEditMode = Boolean(id);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');

  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [roleError, setRoleError] = useState('');

  useEffect(() => {
    if (isEditMode) {
      // Mock data for editing (replace with actual data fetching)
      const mockUser = {
        id: '1',
        name: 'John Doe',
        email: 'john.doe@example.com',
        role: 'Student',
      };
      setName(mockUser.name);
      setEmail(mockUser.email);
      setRole(mockUser.role);
    }
  }, [isEditMode, id]);

  const validateForm = () => {
    let isValid = true;
    if (!name) {
      setNameError(t('adminUserForm.nameRequired'));
      isValid = false;
    } else {
      setNameError('');
    }

    if (!email) {
      setEmailError(t('adminUserForm.emailRequired'));
      isValid = false;
    } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
      setEmailError(t('adminUserForm.invalidEmail'));
      isValid = false;
    } else {
      setEmailError('');
    }

    if (!isEditMode && !password) {
      setPasswordError(t('adminUserForm.passwordRequired'));
      isValid = false;
    } else {
      setPasswordError('');
    }

    if (!role) {
      setRoleError(t('adminUserForm.roleRequired'));
      isValid = false;
    } else {
      setRoleError('');
    }
    return isValid;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
      const userData = {
        name,
        email,
        role,
        ...(password && { password }), // Only include password if it's not empty (i.e., not in edit mode or explicitly changed)
      };
      console.log('Submitting user data:', userData);
      // Handle form submission (e.g., API call)
      navigate('/admin/users');
    }
  };

  return (
    <StyledContainer maxWidth="sm">
      <Logo />
      <Typography variant="h4" component="h1" gutterBottom align="center">
        {isEditMode ? t('adminUserForm.editUser') : t('adminUserForm.addUser')}
      </Typography>
      <StyledPaper elevation={3}>
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label={t('adminUserForm.name')}
            value={name}
            onChange={(e) => setName(e.target.value)}
            error={Boolean(nameError)}
            helperText={nameError}
            margin="normal"
          />
          <TextField
            fullWidth
            label={t('adminUserForm.email')}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={Boolean(emailError)}
            helperText={emailError}
            margin="normal"
            type="email"
          />
          {!isEditMode && (
            <TextField
              fullWidth
              label={t('adminUserForm.password')}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              error={Boolean(passwordError)}
              helperText={passwordError}
              margin="normal"
              type="password"
            />
          )}
          <FormControl fullWidth margin="normal" error={Boolean(roleError)}>
            <InputLabel>{t('adminUserForm.role')}</InputLabel>
            <Select
              value={role}
              label={t('adminUserForm.role')}
              onChange={(e) => setRole(e.target.value)}
            >
              <MenuItem value="">{t('adminUserForm.selectRole')}</MenuItem>
              <MenuItem value="Student">{t('adminUserForm.student')}</MenuItem>
              <MenuItem value="Instructor">{t('adminUserForm.instructor')}</MenuItem>
              <MenuItem value="Admin">{t('adminUserForm.admin')}</MenuItem>
            </Select>
            {roleError && <Typography color="error" variant="caption">{roleError}</Typography>}
          </FormControl>
          <Box display="flex" justifyContent="flex-end" gap={2} mt={3}>
            <Button variant="outlined" onClick={() => navigate('/admin/users')}>
              {t('adminUserForm.cancel')}
            </Button>
            <Button type="submit" variant="contained" color="primary">
              {t('adminUserForm.save')}
            </Button>
          </Box>
        </form>
      </StyledPaper>
    </StyledContainer>
  );
};

export default AdminUserForm;