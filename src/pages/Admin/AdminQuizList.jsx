import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {
  Container,
  Typography,
  Button,
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  InputAdornment,
  IconButton,
} from '@mui/material';
import { styled } from '@mui/system';
import SearchIcon from '@mui/icons-material/Search';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Logo from '../../components/common/Logo';

const HeaderBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: theme.spacing(3),
  flexWrap: 'wrap',
  gap: theme.spacing(2),
}));

const SearchBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(2),
}));

const StyledTableContainer = styled(TableContainer)(({ theme }) => ({
  marginTop: theme.spacing(3),
}));

const AdminQuizList = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');

  const mockQuizzes = [
    {
      id: '1',
      name: 'React Basics Quiz',
      course: 'Introduction to React',
      questions: 10,
    },
    {
      id: '2',
      name: 'Advanced JavaScript',
      course: 'JavaScript Deep Dive',
      questions: 15,
    },
    {
      id: '3',
      name: 'Python Fundamentals',
      course: 'Python for Beginners',
      questions: 12,
    },
  ];

  const filteredQuizzes = mockQuizzes.filter((quiz) =>
    quiz.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleEdit = (id) => {
    navigate(`/admin/quizzes/edit/${id}`);
  };

  const handleDelete = (id) => {
    console.log('Delete quiz:', id);
    // Implement delete logic here
  };

  return (
    <Container component="main" maxWidth="lg">
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2, mt: 4 }}>
        <img src={Logo} alt="EduQuest Logo" style={{ height: 40, marginRight: 10 }} />
        <Typography component="h1" variant="h4">
          {t('adminQuizList.title')}
        </Typography>
      </Box>
      <Typography variant="body1" color="textSecondary" sx={{ mb: 3 }}>
        {t('adminQuizList.description')}
      </Typography>

      <HeaderBox>
        <Button
          variant="contained"
          color="primary"
          onClick={() => navigate('/admin/quizzes/add')}
        >
          {t('adminQuizList.addQuiz')}
        </Button>
        <SearchBox>
          <TextField
            variant="outlined"
            placeholder={t('adminQuizList.search')}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
        </SearchBox>
      </HeaderBox>

      <StyledTableContainer component={Paper}>
        <Table aria-label="quiz table">
          <TableHead>
            <TableRow>
              <TableCell>{t('adminQuizList.quizName')}</TableCell>
              <TableCell>{t('adminQuizList.course')}</TableCell>
              <TableCell>{t('adminQuizList.questions')}</TableCell>
              <TableCell align="right">{t('adminQuizList.actions')}</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredQuizzes.length > 0 ? (
              filteredQuizzes.map((quiz) => (
                <TableRow key={quiz.id}>
                  <TableCell>{quiz.name}</TableCell>
                  <TableCell>{quiz.course}</TableCell>
                  <TableCell>{quiz.questions}</TableCell>
                  <TableCell align="right">
                    <IconButton color="primary" onClick={() => handleEdit(quiz.id)}>
                      <EditIcon />
                    </IconButton>
                    <IconButton color="secondary" onClick={() => handleDelete(quiz.id)}>
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={4} align="center">
                  {t('adminQuizList.noQuizzes')}
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </StyledTableContainer>
    </Container>
  );
};

export default AdminQuizList;