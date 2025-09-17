import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Container, Typography, Box, TextField, Button, Alert, Paper, Grid } from '@mui/material';
import Logo from '../components/common/Logo'; // Corrected Logo import path

const ProfilePage = () => {
  const { t } = useTranslation();
  const [username, setUsername] = useState('john_doe');
  const [email, setEmail] = useState('john.doe@example.com');
  const [firstName, setFirstName] = useState('John');
  const [lastName, setLastName] = useState('Doe');
  const [bio, setBio] = useState('A passionate learner and quiz enthusiast.');
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');
  const [message, setMessage] = useState(null);
  const [messageType, setMessageType] = useState(null);

  const handleProfileUpdate = (e) => {
    e.preventDefault();
    // Simulate API call for profile update
    setTimeout(() => {
      setMessage(t('profilePage.profileUpdated'));
      setMessageType('success');
    }, 1000);
  };

  const handlePasswordChange = (e) => {
    e.preventDefault();
    if (newPassword !== confirmNewPassword) {
      setMessage('New password and confirm password do not match.');
      setMessageType('danger');
      return;
    }
    // Simulate API call for password change
    setTimeout(() => {
      setMessage(t('profilePage.passwordUpdated'));
      setMessageType('success');
      setCurrentPassword('');
      setNewPassword('');
      setConfirmNewPassword('');
    }, 1000);
  };

  const myCourses = [
    { id: 1, title: 'Introduction to React', progress: 75 },
    { id: 2, title: 'Advanced JavaScript', progress: 50 },
  ];

  const myQuizzes = [
    { id: 1, title: 'React Basics Quiz', score: 85, completed: true },
    { id: 2, title: 'JavaScript Fundamentals', score: 70, completed: true },
    { id: 3, title: 'HTML & CSS Basics', score: null, completed: false },
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 5 }}>
      <Box sx={{ mb: 4, textAlign: 'center' }}>
        <img src={Logo} alt="Logo" style={{ maxWidth: '150px', marginBottom: '1rem' }} />
        <Typography variant="h3" component="h1" gutterBottom>{t('profilePage.title')}</Typography>
        <Typography variant="body1" color="text.secondary">{t('profilePage.description')}</Typography>
      </Box>

      {message && <Alert severity={messageType} sx={{ mb: 3 }}>{message}</Alert>}

      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Paper elevation={2} sx={{ p: 4 }}>
            <Typography variant="h5" component="h2" gutterBottom>{t('profilePage.editProfile')}</Typography>
            <Box component="form" onSubmit={handleProfileUpdate} sx={{ mt: 2 }}>
              <TextField
                fullWidth
                margin="normal"
                label={t('profilePage.username')}
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <TextField
                fullWidth
                margin="normal"
                label={t('profilePage.email')}
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <TextField
                fullWidth
                margin="normal"
                label={t('profilePage.firstName')}
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
              <TextField
                fullWidth
                margin="normal"
                label={t('profilePage.lastName')}
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
              <TextField
                fullWidth
                margin="normal"
                label={t('profilePage.bio')}
                multiline
                rows={3}
                value={bio}
                onChange={(e) => setBio(e.target.value)}
              />
              <Button variant="contained" color="primary" type="submit" sx={{ mt: 3 }}>
                {t('profilePage.updateProfile')}
              </Button>
            </Box>
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper elevation={2} sx={{ p: 4 }}>
            <Typography variant="h5" component="h2" gutterBottom>{t('profilePage.changePassword')}</Typography>
            <Box component="form" onSubmit={handlePasswordChange} sx={{ mt: 2 }}>
              <TextField
                fullWidth
                margin="normal"
                label={t('profilePage.currentPassword')}
                type="password"
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
              />
              <TextField
                fullWidth
                margin="normal"
                label={t('profilePage.newPassword')}
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
              <TextField
                fullWidth
                margin="normal"
                label={t('profilePage.confirmNewPassword')}
                type="password"
                value={confirmNewPassword}
                onChange={(e) => setConfirmNewPassword(e.target.value)}
              />
              <Button variant="contained" color="primary" type="submit" sx={{ mt: 3 }}>
                {t('profilePage.updatePassword')}
              </Button>
            </Box>
          </Paper>
        </Grid>
      </Grid>

      <Grid container spacing={4} sx={{ mt: 4 }}>
        <Grid item xs={12} md={6}>
          <Paper elevation={2} sx={{ p: 4 }}>
            <Typography variant="h5" component="h2" gutterBottom>{t('profilePage.myCourses')}</Typography>
            {myCourses.length > 0 ? (
              <Box>
                {myCourses.map((course) => (
                  <Box key={course.id} sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', py: 1, borderBottom: '1px solid #eee' }}>
                    <Typography variant="body1">{t('profilePage.courseTitle')}: {course.title}</Typography>
                    <Button variant="contained" size="small">{t('profilePage.progress')}: {course.progress}%</Button>
                  </Box>
                ))}
              </Box>
            ) : (
              <Typography>{t('profilePage.noCourses')}</Typography>
            )}
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper elevation={2} sx={{ p: 4 }}>
            <Typography variant="h5" component="h2" gutterBottom>{t('profilePage.myQuizzes')}</Typography>
            {myQuizzes.length > 0 ? (
              <Box>
                {myQuizzes.map((quiz) => (
                  <Box key={quiz.id} sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', py: 1, borderBottom: '1px solid #eee' }}>
                    <Typography variant="body1">{t('profilePage.quizTitle')}: {quiz.title}</Typography>
                    {quiz.completed ? (
                      <Button variant="contained" color="success" size="small">{t('profilePage.score')}: {quiz.score}%</Button>
                    ) : (
                      <Button variant="contained" color="warning" size="small">{t('profilePage.inProgress')}</Button>
                    )}
                  </Box>
                ))}
              </Box>
            ) : (
              <Typography>{t('profilePage.noQuizzes')}</Typography>
            )}
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ProfilePage;