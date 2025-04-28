# Sai Rajath Portfolio Website

A modern, responsive portfolio website for Sai Rajath CB, front-end developer.

## Features

- Responsive design that works on mobile, tablet, and desktop
- Dark/light mode toggle
- Smooth scrolling navigation
- Animated sections with scroll reveal effects
- Contact form
- Resume download option
- Social media links
- Built with React, TypeScript, and Tailwind CSS

## Running Locally

### Prerequisites

- Node.js (version 16 or higher)
- npm (included with Node.js)

### Installation

1. Clone the repository or download the source code
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory
   ```
   cd sai-rajath-portfolio
   ```

3. Install dependencies
   ```
   npm install
   ```

### Running the Application

#### On Windows

Run the application using the provided batch script:
```
start-dev.bat
```

Or manually set the environment variable:
```
set NODE_ENV=development
npx tsx server/index.ts
```

#### On macOS/Linux

Run the application using the provided shell script:
```
chmod +x start-dev.sh
./start-dev.sh
```

Or manually set the environment variable:
```
NODE_ENV=development npx tsx server/index.ts
```

### Accessing the Website

Once the application is running, open your browser and navigate to:
```
http://localhost:5000
```

## Building for Production

To build the project for production deployment:

```
npm run build
```

This will generate optimized files in the `dist` directory ready for deployment.

## Project Structure

- `client/`: Front-end React application
  - `src/components/`: React components
  - `src/hooks/`: Custom React hooks
  - `src/lib/`: Utility functions and data
  - `src/assets/`: Static assets like images and the resume PDF
- `server/`: Express.js back-end
- `shared/`: Shared code between front-end and back-end
- `attached_assets/`: Original assets provided by the user

## Credits

Developed using React.js, TypeScript, Tailwind CSS and Express.js.