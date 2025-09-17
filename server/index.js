const express = require('express');
const cors = require('cors');
const multer = require('multer'); // Import multer

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

// Configure multer for file uploads
const upload = multer({ dest: 'uploads/' }); // Files will be stored in the 'uploads/' directory

app.post('/api/ollama', upload.single('file'), async (req, res) => { // Use upload.single('file') for file uploads
  const { prompt } = req.body;
  const file = req.file; // Access the uploaded file

  console.log('Received prompt:', prompt);
  console.log('Received file:', file);

  try {
      const response = await fetch('http://localhost:11434/api/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: 'phi3',
          prompt: prompt,
          stream: false,
        }),
      });

      // Log the raw response status and headers
      console.log('Ollama response status:', response.status);
      console.log('Ollama response headers:', response.headers);

      // Check if the response is OK before trying to parse JSON
      if (!response.ok) {
        const errorText = await response.text();
        console.error('Ollama error response text:', errorText);
        throw new Error(`Ollama API returned status ${response.status}: ${errorText}`);
      }

      const data = await response.json();
      console.log('Ollama data received:', data);
      console.log('Ollama data.response:', data.response);
      res.json({ response: data.response });
    } catch (error) {
    console.error('Error communicating with Ollama:', error);
    res.status(500).json({ error: 'Error communicating with Ollama' });
  }
});

app.get('/api/courses', (req, res) => {
  const courses = [
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
  res.json(courses);
});

app.listen(port, () => {
  console.log(`Backend server listening at http://localhost:${port}`);
});