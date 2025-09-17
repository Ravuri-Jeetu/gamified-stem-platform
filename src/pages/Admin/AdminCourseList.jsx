import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  Box,
  Typography,
  Button,
  TextField,
  InputAdornment,
  IconButton,
  Card,
  CardContent,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableContainer,
  Paper,
  Avatar,
  Chip,
  Menu,
  MenuItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import {
  Add as AddIcon,
  Search as SearchIcon,
  MoreVert as MoreVertIcon,
  Edit as EditIcon,
  Delete as DeleteIcon,
} from '@mui/icons-material';
import Logo from '../../components/common/Logo';

export const courses = [
  {
    id: 1,
    name: 'Introduction to React',
    category: 'Web Development',
    instructor: 'John Doe',
    status: 'Published',
    image: 'https://via.placeholder.com/150/FF0000/FFFFFF?text=React',
    difficulty: 'beginner',
  },
  {
    id: 2,
    name: 'Advanced Python Programming',
    category: 'Programming',
    instructor: 'Jane Smith',
    status: 'Draft',
    image: 'https://via.placeholder.com/150/0000FF/FFFFFF?text=Python',
    difficulty: 'advanced',
  },
  {
    id: 3,
    name: 'Data Science with R',
    category: 'Data Science',
    instructor: 'Emily White',
    status: 'Published',
    image: 'https://via.placeholder.com/150/008000/FFFFFF?text=R',
    difficulty: 'intermediate',
  },
  {
    id: 4,
    name: 'Calculus I',
    category: 'Mathematics',
    instructor: 'Dr. Alan Turing',
    status: 'Published',
    image: 'https://via.placeholder.com/150/FF5733/FFFFFF?text=Calculus',
    difficulty: 'advanced',
  },
  {
    id: 5,
    name: 'Introduction to Physics',
    category: 'Science',
    instructor: 'Dr. Marie Curie',
    status: 'Published',
    image: 'https://via.placeholder.com/150/33FF57/FFFFFF?text=Physics',
    difficulty: 'beginner',
  },
  {
    id: 6,
    name: 'Biology: Cell Structure',
    category: 'Science',
    instructor: 'Dr. Charles Darwin',
    status: 'Draft',
    image: 'https://via.placeholder.com/150/3357FF/FFFFFF?text=Biology',
    difficulty: 'intermediate',
  },
];

const AdminCourseList = () => {
  const { t } = useTranslation();
  const [searchTerm, setSearchTerm] = useState('');
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedCourse, setSelectedCourse] = useState(null);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleMenuOpen = (event, course) => {
    setAnchorEl(event.currentTarget);
    setSelectedCourse(course);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setSelectedCourse(null);
  };

  const handleEdit = () => {
    console.log('Edit course:', selectedCourse);
    handleMenuClose();
  };

  const handleDelete = () => {
    console.log('Delete course:', selectedCourse);
    handleMenuClose();
  };

  const filteredCourses = courses.filter((course) =>
    course.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Box sx={{ p: 3 }}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          mb: 4,
          flexWrap: 'wrap',
          gap: 2,
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Logo />
          <Typography variant="h4" component="h1">
            {t('adminCourseList.title')}
          </Typography>
        </Box>
        <Button
          variant="contained"
          color="primary"
          startIcon={<AddIcon />}
          onClick={() => console.log('Add New Course')}
        >
          {t('adminCourseList.addCourse')}
        </Button>
      </Box>

      <Typography variant="body1" sx={{ mb: 4 }}>
        {t('adminCourseList.description')}
      </Typography>

      <Card sx={{ mb: 4 }}>
        <CardContent>
          <TextField
            fullWidth
            variant="outlined"
            placeholder={t('adminCourseList.search')}
            value={searchTerm}
            onChange={handleSearchChange}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
        </CardContent>
      </Card>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>{t('adminCourseList.courseName')}</TableCell>
              <TableCell>{t('adminCourseList.category')}</TableCell>
              <TableCell>{t('adminCourseList.instructor')}</TableCell>
              <TableCell>{t('adminCourseList.status')}</TableCell>
              <TableCell align="right">{t('adminCourseList.actions')}</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredCourses.map((course) => (
              <TableRow key={course.id}>
                <TableCell>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Avatar src={course.image} sx={{ mr: 2 }} />
                    <Typography variant="subtitle2">{course.name}</Typography>
                  </Box>
                </TableCell>
                <TableCell>{course.category}</TableCell>
                <TableCell>{course.instructor}</TableCell>
                <TableCell>
                  <Chip
                    label={course.status}
                    color={course.status === 'Published' ? 'success' : 'info'}
                    size="small"
                  />
                </TableCell>
                <TableCell align="right">
                  <IconButton
                    aria-label="more"
                    aria-controls="long-menu"
                    aria-haspopup="true"
                    onClick={(event) => handleMenuOpen(event, course)}
                  >
                    <MoreVertIcon />
                  </IconButton>
                  <Menu
                    id="long-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl) && selectedCourse?.id === course.id}
                    onClose={handleMenuClose}
                    PaperProps={{
                      style: {
                        maxHeight: 48 * 4.5,
                        width: '20ch',
                      },
                    }}
                  >
                    <MenuItem onClick={handleEdit}>
                      <ListItemIcon>
                        <EditIcon fontSize="small" />
                      </ListItemIcon>
                      <ListItemText>{t('adminCourseList.edit')}</ListItemText>
                    </MenuItem>
                    <MenuItem onClick={handleDelete}>
                      <ListItemIcon>
                        <DeleteIcon fontSize="small" />
                      </ListItemIcon>
                      <ListItemText>{t('adminCourseList.delete')}</ListItemText>
                    </MenuItem>
                  </Menu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default AdminCourseList;