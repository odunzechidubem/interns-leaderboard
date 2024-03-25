// App.js
import { useState } from 'react';
import Path from './components/Path';
import "./App.css"

const App = () => {
  const [paths, setPaths] = useState([
    {
      id: 1, name: 'Frontend', students: [
        { id: 1, serialNumber: 1, firstName: 'Chidubem', lastName: 'Odunze', task: [10, 10, 10, 10, 10], image: 'https://media.licdn.com/dms/image/D4D03AQHvGlWkjzw2CQ/profile-displayphoto-shrink_800_800/0/1695810129781?e=2147483647&v=beta&t=A3Cz5pTUihW8nVShV3mtO1kSoeqR3Hl9BgndbK4r1ZY' },
        { id: 2, serialNumber: 2, firstName: 'Modester', lastName: 'Abonyi', task: [10, 10, 9, 6, 9], image: 'https://scontent.fiba1-2.fna.fbcdn.net/v/t39.30808-6/297338495_771091874043646_8038282767477599815_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_ohc=HtKKI46H_xoAX-GkCry&_nc_zt=23&_nc_ht=scontent.fiba1-2.fna&oh=00_AfDkrvmpkX_VqE3nLwRNRJmkygwUDdwcgERr1gc_jitPAw&oe=66051D98' },
        { id: 3, serialNumber: 3, firstName: 'Odinachukwu', lastName: 'Ede', task: [9, 7, 3, 8, 10], image: 'https://media.licdn.com/dms/image/D4D03AQF-3SKWPLCV8A/profile-displayphoto-shrink_400_400/0/1697496601660?e=2147483647&v=beta&t=SK8Hj_IDFaXbD-a5bFgpYS0SxGW20Jc8oOVoDfvZmW0' },
        { id: 4, serialNumber: 4, firstName: 'Favour', lastName: 'Nzeh', task: [4, 7, 5, 6, 5], image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQY8EgGhrfcFtHN8qbOe6xoOj1quBooDaSAg&usqp=CAU' },
        { id: 5, serialNumber: 5, firstName: 'Katherine', lastName: 'Ozonnadi', task: [5, 9, 2, 4, 6], image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCdnQpc6vruaIGZPFKVurE51lDM5zsOIy2AlZB4xq6IDdTHsRxqbLy5hSr3NuMOptPhjY&usqp=CAU' }
      ]
    },
    {
      id: 2, name: 'Backend', students: [
        { id: 1, serialNumber: 1, firstName: 'Benjamin', lastName: 'Ovu', task: [10, 7, 9, 10, 10], image: 'https://media.licdn.com/dms/image/D4D03AQEsHP68d4qHzw/profile-displayphoto-shrink_200_200/0/1703235101971?e=2147483647&v=beta&t=HEUEwqqjHBuUtohfeA_DFSbkWDQ1PmcMjFlVlNRO96w' },
        { id: 2, serialNumber: 2, firstName: 'Emily', lastName: 'Okoye', task: [10, 8, 9, 5, 5], image: 'https://images.generated.photos/bhnSVATTJLgjRTc444vh4gE0mvw1vOJTnEWKFi5wRIw/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MjY0MjE2LmpwZw.jpg' },
        { id: 3, serialNumber: 3, firstName: 'David', lastName: 'Ayodeji', task: [5, 8, 10, 9, 2], image: 'https://img.freepik.com/free-photo/portrait-african-american-man_23-2149072179.jpg' },
        { id: 4, serialNumber: 4, firstName: 'Chidera', lastName: 'Mesike', task: [7, 2, 7, 3, 10], image: 'https://media.voguebusiness.com/photos/640b52514c264c5cc89d147b/1:1/w_2000,h_2000,c_limit/article-name-voguebus-photographer-month-22-story.jpg' },
        { id: 5, serialNumber: 5, firstName: 'Julius', lastName: 'Okonkwo', task: [1, 5, 2, 4, 3], image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6lT94E9XWtGiVIuXRcEZpF4pCjPUDe49m_Hw1erX7F98aUih5oMoOXBPu-pNtIw1Bafg&usqp=CAU' }
      ]
    },
    {
      id: 3, name: 'Web3', students: [
        { id: 1, serialNumber: 1, firstName: 'Adaobi', lastName: 'Chuks-Aginam', task: [10, 9, 10, 10, 10], image: 'https://img.freepik.com/free-photo/close-up-smiley-african-girl_23-2148860417.jpg' },
        { id: 2, serialNumber: 2, firstName: 'Victor', lastName: 'Okolie', task: [10, 8, 9, 5, 5], image: 'https://northtexan.unt.edu/sites/default/files/starstudent_2.jpg' },
        { id: 3, serialNumber: 3, firstName: 'Tochukwu', lastName: 'Nzeribe', task: [5, 8, 10, 9, 2], image: 'https://m.media-amazon.com/images/S/pv-target-images/9df486f9eb20063e6440c81b992e85de9c57398716dbedf229df3578c81d536e.jpg' },
        { id: 4, serialNumber: 4, firstName: 'Daniella', lastName: 'Ibezim', task: [4, 2, 5, 9, 1], image: 'https://img.freepik.com/free-photo/portrait-african-girl-with-braids_53876-56032.jpg?size=626&ext=jpg&ga=GA1.1.735520172.1710892800&semt=ais' },
        { id: 5, serialNumber: 5, firstName: 'Nnaemeka', lastName: 'Umeh', task: [1, 5, 2, 8, 3], image: 'https://thumbs.dreamstime.com/z/happy-black-man-laughing-close-up-portrait-isolated-white-background-45789159.jpg' }
      ]
    },
    {
      id: 4, name: 'Product Design', students: [
        { id: 1, serialNumber: 1, firstName: 'Precious', lastName: 'Enavreba', task: [10, 7, 9, 10, 10], image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbYbmoGJ8YiHECruuu9y5He-lW2xn4vYyNkY0Uce7acVISxyBOu10bql7kc9T4MeXnF84&usqp=CAU' },
        { id: 2, serialNumber: 2, firstName: 'Princess', lastName: 'Oraeki', task: [10, 8, 9, 5, 5], image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTi87-z41rK3bnP8uFwjsdAwXTkx0iaTXigR-hdnlFOYGjNeI2caEEeJRzc6xIwCsMzvg4&usqp=CAU' },
        { id: 3, serialNumber: 3, firstName: 'Mercy', lastName: 'Ani', task: [5, 8, 10, 9, 2], image: 'https://img.freepik.com/free-photo/portrait-african-american-woman_53876-146143.jpg?w=360' },
        { id: 4, serialNumber: 4, firstName: 'Chukwuka', lastName: 'Eze', task: [4, 2, 5, 10, 1], image: 'https://www.shutterstock.com/image-photo/africanamerican-male-black-tshirt-on-260nw-1298604418.jpg' },
        { id: 5, serialNumber: 5, firstName: 'Wiiliams', lastName: 'Amadi', task: [1, 5, 2, 4, 3], image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlg-CxlZKDcxDKSTdphgl4TR1IjDQJZ8ZhHA&usqp=CAU' }
      ]
    }
  ]);

  const togglePath = (id) => {
    setPaths(paths.map(path => path.id === id ? { ...path, isOpen: !path.isOpen } : path));
  };

  return (
    <div className="App">
      <h1>Learnable23 Interns Leaderboard</h1>
      {paths.map(path => (
        <Path key={path.id} path={path} togglePath={togglePath} />
      ))}
    </div>
  );
};

export default App;
