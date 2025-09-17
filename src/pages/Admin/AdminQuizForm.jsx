import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {
  Container,
  Typography,
  Box,
  TextField,
  Button,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
  RadioGroup,
  FormControlLabel,
  Radio,
  Checkbox,
  FormGroup,
  IconButton,
  Grid,
  Paper,
} from '@mui/material';
import { AddCircleOutline, RemoveCircleOutline } from '@mui/icons-material';
import { styled } from '@mui/system';
import Logo from '../../components/common/Logo';

const FormContainer = styled(Container)(({ theme }) => ({
  marginTop: theme.spacing(4),
  marginBottom: theme.spacing(4),
}));

const QuizFormPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(3),
}));

const QuestionPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  marginTop: theme.spacing(3),
  marginBottom: theme.spacing(3),
  backgroundColor: theme.palette.grey[100],
}));

const AdminQuizForm = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { id } = useParams();
  const isEditMode = Boolean(id);

  const [quizName, setQuizName] = useState('');
  const [description, setDescription] = useState('');
  const [course, setCourse] = useState('');
  const [questions, setQuestions] = useState([]);

  // Mock data for courses (replace with actual data fetching)
  const mockCourses = [
    { id: '1', name: 'Web Development' },
    { id: '2', name: 'Mobile Development' },
    { id: '3', name: 'Data Science' },
  ];

  useEffect(() => {
    if (isEditMode) {
      // Mock data for editing a quiz (replace with actual data fetching)
      const mockQuiz = {
        id: '1',
        quizName: 'Introduction to React',
        description: 'A basic quiz on React fundamentals.',
        course: '1',
        questions: [
          {
            id: 'q1',
            type: 'singleChoice',
            text: 'What is React?',
            options: ['A library', 'A framework', 'A language'],
            correctAnswer: 'A library',
          },
          {
            id: 'q2',
            type: 'multipleChoice',
            text: 'Which of the following are features of React?',
            options: ['Virtual DOM', 'JSX', 'Component-based'],
            correctAnswer: ['Virtual DOM', 'JSX', 'Component-based'],
          },
          {
            id: 'q3',
            type: 'trueFalse',
            text: 'React is developed by Google.',
            correctAnswer: 'False',
          },
        ],
      };
      setQuizName(mockQuiz.quizName);
      setDescription(mockQuiz.description);
      setCourse(mockQuiz.course);
      setQuestions(mockQuiz.questions);
    }
  }, [isEditMode, id]);

  const handleAddQuestion = () => {
    setQuestions([
      ...questions,
      {
        id: `q${questions.length + 1}`,
        type: 'singleChoice',
        text: '',
        options: [''],
        correctAnswer: '',
      },
    ]);
  };

  const handleRemoveQuestion = (index) => {
    const newQuestions = [...questions];
    newQuestions.splice(index, 1);
    setQuestions(newQuestions);
  };

  const handleQuestionChange = (index, field, value) => {
    const newQuestions = [...questions];
    newQuestions[index][field] = value;
    setQuestions(newQuestions);
  };

  const handleOptionChange = (qIndex, oIndex, value) => {
    const newQuestions = [...questions];
    newQuestions[qIndex].options[oIndex] = value;
    setQuestions(newQuestions);
  };

  const handleAddOption = (qIndex) => {
    const newQuestions = [...questions];
    newQuestions[qIndex].options.push('');
    setQuestions(newQuestions);
  };

  const handleRemoveOption = (qIndex, oIndex) => {
    const newQuestions = [...questions];
    newQuestions[qIndex].options.splice(oIndex, 1);
    setQuestions(newQuestions);
  };

  const handleCorrectAnswerChange = (qIndex, value) => {
    const newQuestions = [...questions];
    newQuestions[qIndex].correctAnswer = value;
    setQuestions(newQuestions);
  };

  const handleMultipleCorrectAnswerChange = (qIndex, option) => {
    const newQuestions = [...questions];
    const currentCorrectAnswers = newQuestions[qIndex].correctAnswer || [];
    if (currentCorrectAnswers.includes(option)) {
      newQuestions[qIndex].correctAnswer = currentCorrectAnswers.filter((ans) => ans !== option);
    } else {
      newQuestions[qIndex].correctAnswer = [...currentCorrectAnswers, option];
    }
    setQuestions(newQuestions);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      quizName,
      description,
      course,
      questions,
    });
    // Handle form submission (e.g., API call to save quiz)
    navigate('/admin/quizzes');
  };

  return (
    <FormContainer maxWidth="md">
      <Logo />
      <Typography variant="h4" component="h1" gutterBottom align="center">
        {isEditMode ? t('adminQuizForm.editQuiz') : t('adminQuizForm.addQuiz')}
      </Typography>
      <QuizFormPaper elevation={3}>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label={t('adminQuizForm.quizName')}
                value={quizName}
                onChange={(e) => setQuizName(e.target.value)}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label={t('adminQuizForm.description')}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                multiline
                rows={4}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth required>
                <InputLabel>{t('adminQuizForm.course')}</InputLabel>
                <Select
                  value={course}
                  onChange={(e) => setCourse(e.target.value)}
                  label={t('adminQuizForm.course')}
                >
                  {mockCourses.map((c) => (
                    <MenuItem key={c.id} value={c.id}>
                      {c.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12}>
              <Typography variant="h5" gutterBottom>
                {t('adminQuizForm.addQuestion')}
              </Typography>
              {questions.map((question, qIndex) => (
                <QuestionPaper key={question.id} elevation={1}>
                  <Grid container spacing={2} alignItems="center">
                    <Grid item xs={10}>
                      <TextField
                        fullWidth
                        label={`${t('adminQuizForm.questionText')} ${qIndex + 1}`}
                        value={question.text}
                        onChange={(e) => handleQuestionChange(qIndex, 'text', e.target.value)}
                        required
                      />
                    </Grid>
                    <Grid item xs={2}>
                      <IconButton onClick={() => handleRemoveQuestion(qIndex)} color="error">
                        <RemoveCircleOutline />
                      </IconButton>
                    </Grid>
                    <Grid item xs={12}>
                      <FormControl fullWidth>
                        <InputLabel>{t('adminQuizForm.questionType')}</InputLabel>
                        <Select
                          value={question.type}
                          onChange={(e) => handleQuestionChange(qIndex, 'type', e.target.value)}
                          label={t('adminQuizForm.questionType')}
                        >
                          <MenuItem value="singleChoice">{t('adminQuizForm.singleChoice')}</MenuItem>
                          <MenuItem value="multipleChoice">{t('adminQuizForm.multipleChoice')}</MenuItem>
                          <MenuItem value="trueFalse">{t('adminQuizForm.trueFalse')}</MenuItem>
                        </Select>
                      </FormControl>
                    </Grid>

                    {question.type !== 'trueFalse' && (
                      <Grid item xs={12}>
                        <Typography variant="h6" gutterBottom>
                          {t('adminQuizForm.options')}
                        </Typography>
                        {question.options.map((option, oIndex) => (
                          <Box key={oIndex} display="flex" alignItems="center" mb={1}>
                            <TextField
                              fullWidth
                              label={t('adminQuizForm.optionPlaceholder', { number: oIndex + 1 })}
                              value={option}
                              onChange={(e) => handleOptionChange(qIndex, oIndex, e.target.value)}
                              required
                            />
                            <IconButton onClick={() => handleRemoveOption(qIndex, oIndex)} color="error">
                              <RemoveCircleOutline />
                            </IconButton>
                          </Box>
                        ))}
                        <Button
                          startIcon={<AddCircleOutline />}
                          onClick={() => handleAddOption(qIndex)}
                          variant="outlined"
                        >
                          {t('adminQuizForm.addOption')}
                        </Button>
                      </Grid>
                    )}

                    <Grid item xs={12}>
                      <Typography variant="h6" gutterBottom>
                        {t('adminQuizForm.correctAnswer')}
                      </Typography>
                      {question.type === 'singleChoice' && (
                        <RadioGroup
                          value={question.correctAnswer}
                          onChange={(e) => handleCorrectAnswerChange(qIndex, e.target.value)}
                        >
                          {question.options.map((option, oIndex) => (
                            <FormControlLabel
                              key={oIndex}
                              value={option}
                              control={<Radio />}
                              label={option}
                            />
                          ))}
                        </RadioGroup>
                      )}
                      {question.type === 'multipleChoice' && (
                        <FormGroup>
                          {question.options.map((option, oIndex) => (
                            <FormControlLabel
                              key={oIndex}
                              control={
                                <Checkbox
                                  checked={(question.correctAnswer || []).includes(option)}
                                  onChange={() => handleMultipleCorrectAnswerChange(qIndex, option)}
                                />
                              }
                              label={option}
                            />
                          ))}
                        </FormGroup>
                      )}
                      {question.type === 'trueFalse' && (
                        <RadioGroup
                          value={question.correctAnswer}
                          onChange={(e) => handleCorrectAnswerChange(qIndex, e.target.value)}
                        >
                          <FormControlLabel value="True" control={<Radio />} label="True" />
                          <FormControlLabel value="False" control={<Radio />} label="False" />
                        </RadioGroup>
                      )}
                    </Grid>
                  </Grid>
                </QuestionPaper>
              ))}
              <Button
                startIcon={<AddCircleOutline />}
                onClick={handleAddQuestion}
                variant="contained"
                color="primary"
              >
                {t('adminQuizForm.addQuestion')}
              </Button>
            </Grid>

            <Grid item xs={12} display="flex" justifyContent="flex-end" gap={2}>
              <Button variant="outlined" onClick={() => navigate('/admin/quizzes')}>
                {t('adminQuizForm.cancel')}
              </Button>
              <Button type="submit" variant="contained" color="primary">
                {t('adminQuizForm.saveQuiz')}
              </Button>
            </Grid>
          </Grid>
        </form>
      </QuizFormPaper>
    </FormContainer>
  );
};

export default AdminQuizForm;