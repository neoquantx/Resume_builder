# Resume Builder

A simple, elegant web‑based resume builder that helps you create professional resumes in minutes. Fill in your details, watch a live preview update in real‑time, and download your resume as PDF or DOCX.

## Features

- **Live Preview**: see your resume update as you type
- **Multiple Templates**: CMRIT‑students layout and a generic freshers layout
- **Dynamic Sections**: add/remove projects, skills, internships, certifications, extracurriculars, etc.
- **Links**: supply LinkedIn, GitHub and LeetCode URLs
- **Photo Upload**: include a passport‑size photo with preview
- **Download**: export as PDF or DOCX using jsPDF/docx/FileSaver
- **Responsive**: works on mobile and desktop browsers
- **No build**: purely HTML/CSS/JS

## Templates

### CMRIT Students

Template pre‑configured for CMR Institute of Technology students with:

- College details auto‑filled; enter branch, CGPA, year of passing
- 12th/10th education sections
- Career objective field
- Technical skills section with heading/skills pairs
- Projects (name, description points, tech stack)
- Internships, certifications, extracurricular activities
- Personal details: DOB, gender, nationality, permanent address, languages, hobbies

### Freshers

Generic fresh‑graduate template that supports:

- Flexible academic blocks (PG, UG, 12th, 10th)
- Profile summary instead of objective
- Skills, projects (with role), internships, certifications, extracurriculars
- Contact info with city/pincode, phone, email, LinkedIn, GitHub, LeetCode

## Getting Started

1. Clone or download this repository  
2. Open `index.html` in your web browser  
3. Choose a template  
4. Fill in your information  
5. Preview updates live and download your resume

## Project Structure

```
Resume_builder/
├── index.html      # Landing page with template selection
├── cmrit.html      # CMRIT student resume builder
├── cmrit.js        # JavaScript for CMRIT template
├── freshers.html   # Freshers resume builder
├── freshers.js     # JavaScript for Freshers template
├── style.css       # Shared stylesheet
└── README.md       # This file
```

## Technologies Used

- HTML5
- CSS3
- Vanilla JavaScript
- jsPDF, docx, FileSaver (CDN)

## Usage

No installation or build process required. Just open `index.html` in any modern browser.

