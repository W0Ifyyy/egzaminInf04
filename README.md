# Egzamin INF04 - Aplikacja webowa

This repository contains the practical part (Section II) of the INF04 exam project. The application is a web-based gallery for image categorization built using **React**, **TypeScript**, and **Vite**.

## Project Overview

This project was developed as part of the INF04 exam. The task was to create a front-end application that categorizes images based on three predefined categories:
- **Kwiaty (Flowers)**
- **Zwierzęta (Animals)**
- **Samochody (Cars)**

The application dynamically displays images from the gallery based on the selected categories and features a download button for each image that increases the download counter in real-time.

### Key Features
- **Dynamic Filtering:** Toggle checkboxes to filter images by category.
- **Download Counter:** Each image displays a download count that increments when the "Pobierz" (Download) button is clicked.
- **Responsive Layout:** Images are styled with margins and rounded corners for a clean, modern look.
- **Data-Driven:** Image details (id, alt text, filename, category, downloads) are loaded from `dane.txt` and rendered dynamically.

## Technologies Used

- **React**: For building interactive user interfaces.
- **TypeScript**: Ensures type safety and a better development experience.
- **Vite**: Provides fast development and build tooling.
- **ESLint**: Maintains code quality with enforced coding standards.

## Getting Started

To run the project locally, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/W0Ifyyy/egzaminInf04.git
   cd egzaminInf04/inf04
2. **Install dependecties:**
   ```bash
   npm install
3. **Start the development server:**
   ```bash
   npm run dev

## Project Structure

- **public/**: Contains static assets, including images.
- **src/**: Contains the source code of the application.
- **dane.txt**: A text file with image data objects (`id`, `alt`, `filename`, `category`, `downloads`).
- Configuration files for **TypeScript**, **Vite**, and **ESLint** are included in the root directory.

## Exam Task Details

### Task Requirements

- **Header**: The application displays a main header with the title **"Kategorie zdjęć"**.
- **Category Toggles**: Three default-enabled checkboxes labeled:
  - "Kwiaty"
  - "Zwierzęta"
  - "Samochody"  
  These allow the user to filter the displayed images.
- **Image Gallery**: Images are conditionally rendered based on the active category toggles. Each image block includes:
  - The image itself.
  - A header showing the current download count.
  - A **"Pobierz"** button to download the image.
- **Download Functionality**: Clicking the **"Pobierz"** button increases the download count immediately in the displayed UI.
- **Clean Code**: The application uses loops and conditions for dynamic rendering and adheres to clean code practices with meaningful variable and function names.

### Implementation Notes

- The application was built to work seamlessly with any number of images provided in `dane.txt`.
- All images should be placed in the `assets` folder as required.
- The application meets the exam's practical requirements and is designed for readability and maintainability.

If you have any questions or suggestions feel free to reach out to me!
