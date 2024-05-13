/* Navigation */

/* Course-nav reader */
const courseButton = document.getElementById('courses');
let courseSpeech = null;

const startCourseSpeech = () => {
    const textToRead = 'Navigation, Courses';
    courseSpeech = new SpeechSynthesisUtterance(textToRead);
    courseSpeech.lang = 'en-US';
    window.speechSynthesis.speak(courseSpeech);
};

courseButton.addEventListener('focus', startCourseSpeech);

courseButton.addEventListener('blur', () => {
    if (courseSpeech) {
        window.speechSynthesis.cancel();
        courseSpeech = null;
    }
});

/* Quiz-nav  reader */
const quizButton = document.getElementById('quiz');
let quizSpeech = null;

const startQuizSpeech = () => {
    const textToRead = 'Navigation, Quiz';
    quizSpeech = new SpeechSynthesisUtterance(textToRead);
    quizSpeech.lang = 'en-US';
    window.speechSynthesis.speak(quizSpeech);
};

quizButton.addEventListener('focus', startQuizSpeech);

quizButton.addEventListener('blur', () => {
    if (quizSpeech) {
        window.speechSynthesis.cancel();
        quizSpeech = null;
    }
});

/* Progress-nav  reader */
const progressButton = document.getElementById('progress');
let progressSpeech = null;

const startProgressSpeech = () => {
    const textToRead = 'Navigation, Progress';
    progressSpeech = new SpeechSynthesisUtterance(textToRead);
    progressSpeech.lang = 'en-US';
    window.speechSynthesis.speak(progressSpeech);
};

progressButton.addEventListener('focus', startProgressSpeech);

progressButton.addEventListener('blur', () => {
    if (progressSpeech) {
        window.speechSynthesis.cancel();
        progressSpeech = null;
    }
});

/* Resources-nav  reader */
const resourcesButton = document.getElementById('resources');
let resourcesSpeech = null;

const startResourcesSpeech = () => {
    const textToRead = 'Navigation, Resources';
    resourcesSpeech = new SpeechSynthesisUtterance(textToRead);
    resourcesSpeech.lang = 'en-US';
    window.speechSynthesis.speak(resourcesSpeech);
};

resourcesButton.addEventListener('focus', startResourcesSpeech);

resourcesButton.addEventListener('blur', () => {
    if (resourcesSpeech) {
        window.speechSynthesis.cancel();
        resourcesSpeech = null;
    }
});

/* About us-nav  reader */
const aboutButton = document.getElementById('about');
let aboutSpeech = null;

const startAboutSpeech = () => {
    const textToRead = 'Navigation, About us';
    aboutSpeech = new SpeechSynthesisUtterance(textToRead);
    aboutSpeech.lang = 'en-US';
    window.speechSynthesis.speak(aboutSpeech);
};

aboutButton.addEventListener('focus', startAboutSpeech);

aboutButton.addEventListener('blur', () => {
    if (aboutSpeech) {
        window.speechSynthesis.cancel();
        aboutSpeech = null;
    }
});

/* Log in-nav  reader */
const loginButton = document.getElementById('login');
let loginSpeech = null;

const startLoginSpeech = () => {
    const textToRead = 'Navigation, Login';
    loginSpeech = new SpeechSynthesisUtterance(textToRead);
    loginSpeech.lang = 'en-US';
    window.speechSynthesis.speak(loginSpeech);
};

loginButton.addEventListener('focus', startLoginSpeech);

loginButton.addEventListener('blur', () => {
    if (loginSpeech) {
        window.speechSynthesis.cancel();
        loginSpeech = null;
    }
});

/* Containers section */

/* Containers-courses */
const SectcourseButton = document.getElementById('Course');
let SectcourseSpeech = null;

const startSectCourseSpeech = () => {
    const textToRead = 'Explore courses, Beginner looking to learn the basics or an advanced learner aiming for fluency, our expertly crafted lessons cater to all levels.';
    SectcourseSpeech = new SpeechSynthesisUtterance(textToRead);
    SectcourseSpeech.lang = 'en-US';
    window.speechSynthesis.speak(SectcourseSpeech);
};

SectcourseButton.addEventListener('focus', startSectCourseSpeech);

SectcourseButton.addEventListener('blur', () => {
    if (SectcourseSpeech) {
        window.speechSynthesis.cancel();
        SectcourseSpeech = null;
    }
});

/* Containers-quiz */
const SectquizButton = document.getElementById('Quiz');
let SectquizSpeech = null;

const startSectQuizSpeech = () => {
    const textToRead = 'Explore quiz, Challenge yourself with our interactive quizzes designed to reinforce your learning and test your understanding of the English language.';
    SectquizSpeech = new SpeechSynthesisUtterance(textToRead);
    SectquizSpeech.lang = 'en-US';
    window.speechSynthesis.speak(SectquizSpeech);
};

SectquizButton.addEventListener('focus', startSectQuizSpeech);

SectquizButton.addEventListener('blur', () => {
    if (SectquizSpeech) {
        window.speechSynthesis.cancel();
        SectquizSpeech = null;
    }
});

/* Containers-progress */
const SectprogressButton = document.getElementById('Progress');
let SectprogressSpeech = null;

const startSectProgressSpeech = () => {
    const textToRead = 'Explore progress, With our progress tracking feature, you can easily monitor your advancement in learning English and stay motivated throughout your language learning journey.';
    SectprogressSpeech = new SpeechSynthesisUtterance(textToRead);
    SectprogressSpeech.lang = 'en-US';
    window.speechSynthesis.speak(SectprogressSpeech);
};

SectprogressButton.addEventListener('focus', startSectProgressSpeech);

SectprogressButton.addEventListener('blur', () => {
    if (SectprogressSpeech) {
        window.speechSynthesis.cancel();
        SectprogressSpeech = null;
    }
});

/* Containers-resources */
const SectresourcesButton = document.getElementById('Resources');
let SectresourcesSpeech = null;

const startSectResourcesSpeech = () => {
    const textToRead = 'Explore resource, Access a wealth of resources to enhance your English language learning experience. Our resource library is filled with valuable materials';
    SectresourcesSpeech = new SpeechSynthesisUtterance(textToRead);
    SectresourcesSpeech.lang = 'en-US';
    window.speechSynthesis.speak(SectresourcesSpeech);
};

SectresourcesButton.addEventListener('focus', startSectResourcesSpeech);

SectresourcesButton.addEventListener('blur', () => {
    if (SectresourcesSpeech) {
        window.speechSynthesis.cancel();
        SectresourcesSpeech = null;
    }
});

/* Footer-about us */
const SectaboutButton = document.getElementById('About');
let SectaboutSpeech = null;

const startSectAboutSpeech = () => {
    const textToRead = 'Learn more about StudyStream, Our team is passionate about helping individuals with visual impaired around the world achieve their language learning goals. With a team of dedicated language experts and educators, we provide website with keyboard-accessibility service and features to assist disability for easier operation, we also strive to provide high-quality, interactive, and engaging English language courses that cater to learners of all levels.';
    SectaboutSpeech = new SpeechSynthesisUtterance(textToRead);
    SectaboutSpeech.lang = 'en-US';
    window.speechSynthesis.speak(SectaboutSpeech);
};

SectaboutButton.addEventListener('focus', startSectAboutSpeech);

SectaboutButton.addEventListener('blur', () => {
    if (SectaboutSpeech) {
        window.speechSynthesis.cancel();
        SectaboutSpeech = null;
    }
});