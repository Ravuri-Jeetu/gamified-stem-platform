import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Container, Typography, Box, TextField, Button, MenuItem, FormControl, InputLabel, Select, Switch, FormControlLabel, Paper } from '@mui/material';
import Logo from '../components/common/Logo';

const SettingsPage = () => {
  const { t, i18n } = useTranslation();
  const [language, setLanguage] = useState(i18n.language);
  const [theme, setTheme] = useState('light'); // Default theme
  const [enableNotifications, setEnableNotifications] = useState(true);
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [pushNotifications, setPushNotifications] = useState(false);

  const handleLanguageChange = (event) => {
    const newLang = event.target.value;
    setLanguage(newLang);
    i18n.changeLanguage(newLang);
  };

  const handleThemeChange = (event) => {
    setTheme(event.target.value);
    // Implement theme change logic here (e.g., update CSS variables or context)
  };

  const handleSaveSettings = () => {
    // Implement save settings logic here
    alert(t('settingsPage.settingsUpdated'));
  };

  return (
    <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
      <Box display="flex" justifyContent="center" mb={4}>
        <Logo />
      </Box>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom align="center">
          {t('settingsPage.title')}
        </Typography>
        <Typography variant="body1" color="textSecondary" align="center" sx={{ mb: 4 }}>
          {t('settingsPage.description')}
        </Typography>

        <Box component="form" noValidate autoComplete="off" sx={{ mt: 3 }}>
          <FormControl fullWidth margin="normal">
            <InputLabel id="language-select-label">{t('settingsPage.language')}</InputLabel>
            <Select
              labelId="language-select-label"
              id="language-select"
              value={language}
              label={t('settingsPage.language')}
              onChange={handleLanguageChange}
            >
              <MenuItem value="en">English</MenuItem>
              <MenuItem value="hi">हिन्दी</MenuItem>
            </Select>
          </FormControl>

          <FormControl fullWidth margin="normal">
            <InputLabel id="theme-select-label">{t('settingsPage.theme')}</InputLabel>
            <Select
              labelId="theme-select-label"
              id="theme-select"
              value={theme}
              label={t('settingsPage.theme')}
              onChange={handleThemeChange}
            >
              <MenuItem value="light">Light</MenuItem>
              <MenuItem value="dark">Dark</MenuItem>
            </Select>
          </FormControl>

          <Box sx={{ mt: 4, mb: 2 }}>
            <Typography variant="h6" gutterBottom>{t('settingsPage.notifications')}</Typography>
            <FormControlLabel
              control={<Switch checked={enableNotifications} onChange={(e) => setEnableNotifications(e.target.checked)} name="enableNotifications" />}
              label={t('settingsPage.enableNotifications')}
            />
            <FormControlLabel
              control={<Switch checked={emailNotifications} onChange={(e) => setEmailNotifications(e.target.checked)} name="emailNotifications" />}
              label={t('settingsPage.emailNotifications')}
            />
            <FormControlLabel
              control={<Switch checked={pushNotifications} onChange={(e) => setPushNotifications(e.target.checked)} name="pushNotifications" />}
              label={t('settingsPage.pushNotifications')}
            />
          </Box>

          <Button
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 3, py: 1.5 }}
            onClick={handleSaveSettings}
          >
            {t('settingsPage.saveSettings')}
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default SettingsPage;