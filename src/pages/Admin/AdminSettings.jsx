import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  Container,
  Typography,
  Box,
  Button,
  Paper,
  FormControlLabel,
  Switch,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  Snackbar,
  Alert,
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

const AdminSettings = () => {
  const { t, i18n } = useTranslation();
  const [language, setLanguage] = useState(i18n.language);
  const [theme, setTheme] = useState('light'); // Assuming 'light' or 'dark'
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [pushNotifications, setPushNotifications] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const handleLanguageChange = (event) => {
    const newLang = event.target.value;
    setLanguage(newLang);
    i18n.changeLanguage(newLang);
  };

  const handleThemeChange = (event) => {
    setTheme(event.target.value);
    // In a real app, you would update your theme context/provider here
  };

  const handleEmailNotificationsChange = (event) => {
    setEmailNotifications(event.target.checked);
  };

  const handlePushNotificationsChange = (event) => {
    setPushNotifications(event.target.checked);
  };

  const handleSaveSettings = () => {
    // In a real app, you would save these settings to a backend or local storage
    console.log('Settings saved:', {
      language,
      theme,
      emailNotifications,
      pushNotifications,
    });
    setSnackbarOpen(true);
  };

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };

  return (
    <StyledContainer maxWidth="md">
      <Logo />
      <Typography variant="h4" component="h1" gutterBottom align="center">
        {t('adminSettings.title')}
      </Typography>
      <StyledPaper elevation={3}>
        <Typography variant="h6" gutterBottom>
          {t('adminSettings.description')}
        </Typography>

        <Box>
          <Typography variant="h6" gutterBottom>
            {t('adminSettings.generalSettings')}
          </Typography>
          <FormControl fullWidth margin="normal">
            <InputLabel>{t('adminSettings.language')}</InputLabel>
            <Select
              value={language}
              label={t('adminSettings.language')}
              onChange={handleLanguageChange}
            >
              <MenuItem value="en">English</MenuItem>
              <MenuItem value="hi">हिन्दी</MenuItem>
            </Select>
          </FormControl>
          <FormControl fullWidth margin="normal">
            <InputLabel>{t('adminSettings.theme')}</InputLabel>
            <Select
              value={theme}
              label={t('adminSettings.theme')}
              onChange={handleThemeChange}
            >
              <MenuItem value="light">{t('adminSettings.light')}</MenuItem>
              <MenuItem value="dark">{t('adminSettings.dark')}</MenuItem>
            </Select>
          </FormControl>
        </Box>

        <Box>
          <Typography variant="h6" gutterBottom>
            {t('adminSettings.notifications')}
          </Typography>
          <FormControlLabel
            control={
              <Switch
                checked={emailNotifications}
                onChange={handleEmailNotificationsChange}
                name="emailNotifications"
                color="primary"
              />
            }
            label={t('adminSettings.emailNotifications')}
          />
          <FormControlLabel
            control={
              <Switch
                checked={pushNotifications}
                onChange={handlePushNotificationsChange}
                name="pushNotifications"
                color="primary"
              />
            }
            label={t('adminSettings.pushNotifications')}
          />
        </Box>

        <Button
          variant="contained"
          color="primary"
          onClick={handleSaveSettings}
          sx={{ alignSelf: 'flex-end' }}
        >
          {t('adminSettings.saveSettings')}
        </Button>
      </StyledPaper>

      <Snackbar open={snackbarOpen} autoHideDuration={6000} onClose={handleCloseSnackbar}>
        <Alert onClose={handleCloseSnackbar} severity="success" sx={{ width: '100%' }}>
          {t('adminSettings.settingsSaved')}
        </Alert>
      </Snackbar>
    </StyledContainer>
  );
};

export default AdminSettings;