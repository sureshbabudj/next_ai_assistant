# AI Chatbot Interface


## Features
- **Next.js**: My project is built using Next.js, ensuring a robust and scalable application.
- **Tailwind CSS & Shadcn UI**: Styled with Tailwind CSS and Shadcn UI components library for a modern look and feel.
- **Responsive Navbar**: Includes a logo on the left, navigation buttons in the middle, and a profile tab on the right.
- **GPT-Style Chat**: A messaging area that mimics a GPT chat interface, complete with placeholder messages and profile integration.
- **Dynamic Messaging**: Real-time updates with a typing animation for AI responses and "AI is thinking..." placeholders.
- **Context Management**: Utilizes React's useContext hook for efficient user context handling.
- **Faker.js**: Utilizes Faker.js to simulate database-like operations, providing a realistic environment for testing and demonstration.
- **Real-Time Typewriting Effect**: Features a dynamic typewriting effect that activates when the chatbot is replying, enhancing the interactive experience.
- **Interaction History**: Displays previous interactions with the chatbot, allowing users to follow the conversation context.
- **Seed Route**: Includes a seed route to populate the interface with dummy content, ensuring that the chatbot can be demonstrated even without live data.
 
## Interactive Features
- **Colorful Animation**: When the AI is processing a response, a colorful animation is displayed, creating a delightful wait time of approximately 3 seconds. This delay mimics the thinking process and can be adjusted or removed as needed in the API routes.

## Installation
To get started with this project, clone the repository and install the dependencies:
```bash
git clone [repository-link]
cd [project-name]
npm install
```

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with browser to see the result.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Routing and Data Handling

### API Routes
- `GET /threads`: Fetches recent interactions with pagination support (accepts `page` and `limit` query parameters).
- `POST /threads`: Initiates a new thread with the provided message.
- `GET /threads/[id]`: Retrieves a specific thread and its messages based on the thread identifier.
- `POST /threads/[id]`: Appends user and AI messages to the thread and returns the AI-generated message, utilizing `faker.lorem.sentence` for content generation.

### Responsive Design
- **Adaptive Navbar**: The navigation bar is designed to be responsive, automatically hiding on smaller devices and replaced by a side drawer that can be toggled with a hamburger menu icon.

## Pages

### Home Page
- **New Interaction**: Users can start a new interaction with a prominently featured bold text box.
- **Recent Interactions**: Displays the five most recent past interactions, providing quick access to ongoing conversations.

### Thread Details Page
- **Interaction Flow**: Users can navigate to this page by starting a new interaction or selecting a recent one. This page offers a thread-like interaction section inspired by the ChatGPT UI, ensuring a familiar and intuitive chat experience.

## Additional Features
- **Real-Time Typewriting Effect**: Enhances the chatbot's response presentation with a dynamic typewriting animation.
- **Seed Route**: A dedicated route for populating the interface with dummy content, ideal for demonstrations and testing.

## Usage Instructions
To interact with the chatbot and view thread details:
1. Visit the home page and click on the bold text box to start a new conversation.
2. To view recent interactions, simply scroll through the list on the home page.
3. Click on any recent interaction to continue the conversation on the thread details page.

For developers, the seed route can be accessed to populate the application with sample data for a full-fledged demo.


## Getting Started with Seed Data
To populate the application with dummy content, navigate to the seed route:
\`\`\`bash
http://localhost:[port]/seed
\`\`\`

copy the json data and replace the `threadsMock` object in `src/app/api/threads/mock.ts`...


## TODO List
- **On-Type Submit**: Implement functionality to allow message submission by typing, eliminating the need for a submit button.
- **Database Integration**: Transition from using Faker.js to an actual database for storing and retrieving interaction data.
- **Authentication**: Develop an authentication mechanism to manage user access and personalization.
- **API Error Handling**: Establish robust error handling for the API to ensure a smooth user experience even when unexpected issues arise.

## Future Enhancements
These TODO items represent the next steps in my project's development. I aim to create a more seamless interaction flow and increase the reliability and security of my chatbot interface.

## Feedback
Your feedback is invaluable to me. If you have suggestions or encounter any issues while using the chatbot, please let me know so I can continue to improve the user experience.