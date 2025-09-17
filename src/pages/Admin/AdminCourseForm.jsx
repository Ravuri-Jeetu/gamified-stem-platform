import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {
  Container,
  Typography,
  TextField,
  Button,
  Box,
  Paper,
  Grid,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
} from '@mui/material';
import { styled } from '@mui/system';
import Logo from '../../components/common/Logo';

const FormContainer = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  marginTop: theme.spacing(4),
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
}));

const StyledForm = styled('form')(({ theme }) => ({
  width: '100%',
  marginTop: theme.spacing(3),
}));

const SubmitButton = styled(Button)(({ theme }) => ({
  margin: theme.spacing(3, 0, 2),
}));

const AdminCourseForm = () => {
  const { t } = useTranslation();
  const { id } = useParams();
  const navigate = useNavigate();
  const isEditMode = Boolean(id);

  const [course, setCourse] = useState({
    name: '',
    description: '',
    instructor: '',
    duration: '',
    price: '',
    category: '',
    level: '',
  });

  useEffect(() => {
    if (isEditMode) {
      // In a real application, fetch course data by id
      const mockCourse = {
        id: '1',
        name: 'Introduction to React',
        description: 'Learn the basics of React development.',
        instructor: 'John Doe',
        duration: '8 weeks',
        price: '199',
        category: 'Web Development',
        level: 'Beginner',
      };
      setCourse(mockCourse);
    }
  }, [isEditMode, id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCourse((prevCourse) => ({
      ...prevCourse,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEditMode) {
      console.log('Updating course:', course);
      // API call to update course
    } else {
      console.log('Adding new course:', course);
      // API call to add new course
    }
    navigate('/admin/courses');
  };

  return (
    <Container component="main" maxWidth="md">
      <FormContainer elevation={6}>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <img src={Logo} alt="EduQuest Logo" style={{ height: 40, marginRight: 10 }} />
          <Typography component="h1" variant="h5">
            {isEditMode ? t('adminCourseForm.editCourse') : t('adminCourseForm.addCourse')}
          </Typography>
        </Box>
        <StyledForm onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                name="name"
                required
                fullWidth
                id="name"
                label={t('adminCourseForm.courseName')}
                autoFocus
                value={course.name}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="description"
                required
                fullWidth
                id="description"
                label={t('adminCourseForm.description')}
                multiline
                rows={4}
                value={course.description}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                name="instructor"
                required
                fullWidth
                id="instructor"
                label={t('adminCourseForm.instructor')}
                value={course.instructor}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                name="duration"
                required
                fullWidth
                id="duration"
                label={t('adminCourseForm.duration')}
                value={course.duration}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                name="price"
                required
                fullWidth
                id="price"
                label={t('adminCourseForm.price')}
                type="number"
                value={course.price}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth required>
                <InputLabel id="category-label">{t('adminCourseForm.category')}</InputLabel>
                <Select
                  labelId="category-label"
                  id="category"
                  name="category"
                  value={course.category}
                  label={t('adminCourseForm.category')}
                  onChange={handleChange}
                >
                  <MenuItem value="">
                    <em>{t('adminCourseForm.selectCategory')}</em>
                  </MenuItem>
                  <MenuItem value="Web Development">{t('adminCourseForm.webDevelopment')}</MenuItem>
                  <MenuItem value="Mobile Development">{t('adminCourseForm.mobileDevelopment')}</MenuItem>
                  <MenuItem value="Data Science">{t('adminCourseForm.dataScience')}</MenuItem>
                  <MenuItem value="Machine Learning">{t('adminCourseForm.machineLearning')}</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth required>
                <InputLabel id="level-label">{t('adminCourseForm.level')}</InputLabel>
                <Select
                  labelId="level-label"
                  id="level"
                  name="level"
                  value={course.level}
                  label={t('adminCourseForm.level')}
                  onChange={handleChange}
                >
                  <MenuItem value="">
                    <em>{t('adminCourseForm.selectLevel')}</em>
                  </MenuItem>
                  <MenuItem value="Beginner">{t('adminCourseForm.beginner')}</MenuItem>
                  <MenuItem value="Intermediate">{t('adminCourseForm.intermediate')}</MenuItem>
                  <MenuItem value="Advanced">{t('adminCourseForm.advanced')}</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
          <SubmitButton
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
          >
            {isEditMode ? t('adminCourseForm.updateCourse') : t('adminCourseForm.addCourse')}
          </SubmitButton>
          <Button
            fullWidth
            variant="outlined"
            color="secondary"
            onClick={() => navigate('/admin/courses')}
          >
            {t('adminCourseForm.cancel')}
          </Button>
        </StyledForm>
      </FormContainer>
    </Container>
  );
};

export default AdminCourseForm;