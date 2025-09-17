import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Container, Typography, Box, Paper, Grid, Card, CardContent, List, ListItem, ListItemText, Button } from '@mui/material';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Logo from '../../components/common/Logo';

const AdminDashboard = () => {
  const { t } = useTranslation();
  const [totalUsers, setTotalUsers] = useState(0);
  const [totalCourses, setTotalCourses] = useState(0);
  const [totalQuizzes, setTotalQuizzes] = useState(0);
  const [recentActivities, setRecentActivities] = useState([]);
  const [data, setData] = useState([
    { name: 'Jan', users: 400, courses: 240, quizzes: 240 },
    { name: 'Feb', users: 300, courses: 139, quizzes: 221 },
    { name: 'Mar', users: 200, courses: 980, quizzes: 229 },
    { name: 'Apr', users: 278, courses: 390, quizzes: 200 },
    { name: 'May', users: 189, courses: 480, quizzes: 218 },
    { name: 'Jun', users: 239, courses: 380, quizzes: 250 },
    { name: 'Jul', users: 349, courses: 430, quizzes: 210 },
  ]);

  useEffect(() => {
    // Mock data fetching
    setTotalUsers(1250);
    setTotalCourses(75);
    setTotalQuizzes(120);
    setRecentActivities([
      { id: 1, type: 'User Registered', description: 'John Doe', date: '2023-10-26' },
      { id: 2, type: 'Course Created', description: 'Advanced React', date: '2023-10-25' },
      { id: 3, type: 'Quiz Added', description: 'JavaScript Basics', date: '2023-10-24' },
    ]);
  }, []);

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Box display="flex" justifyContent="center" mb={4}>
        <Logo />
      </Box>
      <Typography variant="h4" component="h1" gutterBottom align="center">
        {t('adminDashboard.title')}
      </Typography>
      <Typography variant="body1" color="textSecondary" align="center" sx={{ mb: 4 }}>
        {t('adminDashboard.description')}
      </Typography>

      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid item xs={12} md={4}>
          <Card elevation={3}>
            <CardContent>
              <Typography variant="h6" color="textSecondary" gutterBottom>
                {t('adminDashboard.totalUsers')}
              </Typography>
              <Typography variant="h3" component="div">
                {totalUsers}
              </Typography>
              <Button size="small" sx={{ mt: 2 }}>{t('adminDashboard.viewAllUsers')}</Button>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card elevation={3}>
            <CardContent>
              <Typography variant="h6" color="textSecondary" gutterBottom>
                {t('adminDashboard.totalCourses')}
              </Typography>
              <Typography variant="h3" component="div">
                {totalCourses}
              </Typography>
              <Button size="small" sx={{ mt: 2 }}>{t('adminDashboard.viewAllCourses')}</Button>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card elevation={3}>
            <CardContent>
              <Typography variant="h6" color="textSecondary" gutterBottom>
                {t('adminDashboard.totalQuizzes')}
              </Typography>
              <Typography variant="h3" component="div">
                {totalQuizzes}
              </Typography>
              <Button size="small" sx={{ mt: 2 }}>{t('adminDashboard.viewAllQuizzes')}</Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Grid container spacing={3}>
        <Grid item xs={12} md={7}>
          <Paper elevation={3} sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              User and Content Growth
            </Typography>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart
                data={data}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="users" fill="#8884d8" name={t('adminDashboard.totalUsers')} />
                <Bar dataKey="courses" fill="#82ca9d" name={t('adminDashboard.totalCourses')} />
                <Bar dataKey="quizzes" fill="#ffc658" name={t('adminDashboard.totalQuizzes')} />
              </BarChart>
            </ResponsiveContainer>
          </Paper>
        </Grid>
        <Grid item xs={12} md={5}>
          <Paper elevation={3} sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              {t('adminDashboard.recentActivities')}
            </Typography>
            <List>
              {recentActivities.map((activity) => (
                <ListItem key={activity.id} divider>
                  <ListItemText
                    primary={activity.type}
                    secondary={`${activity.description} - ${activity.date}`}
                  />
                </ListItem>
              ))}
            </List>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default AdminDashboard;