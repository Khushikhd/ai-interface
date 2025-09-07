# Nika AI - AI Interface Prototype

A modern, responsive AI interface prototype built with Next.js, TypeScript, and Tailwind CSS. This project showcases essential AI interface features inspired by leading AI platforms.

## Research

### AI Platforms Reviewed

#### 1. OpenAI Playground
- **Key Features**: Clean model selection dropdown, comprehensive parameter controls (temperature, max tokens, top-p), real-time response streaming, conversation history, and code examples
- **Standout Elements**: Intuitive parameter sliders with live preview, model comparison capabilities, and export functionality

#### 2. Hugging Face Spaces
- **Key Features**: Community-driven model discovery, interactive demos, parameter tuning interfaces, and collaborative features
- **Standout Elements**: Visual model cards, easy parameter adjustment, and seamless model switching

#### 3. Anthropic Claude UI
- **Key Features**: Conversational interface, context-aware responses, file upload capabilities, and conversation threading
- **Standout Elements**: Clean chat interface, advanced context management, and intuitive conversation flow

#### 4. Microsoft Copilot Lab
- **Key Features**: Multi-modal input support, prompt engineering tools, template library, and integration capabilities
- **Standout Elements**: Rich prompt templates, visual prompt builder, and comprehensive customization options

#### 5. Google AI Studio
- **Key Features**: Model experimentation, safety settings, prompt optimization, and API integration tools
- **Standout Elements**: Advanced safety controls, prompt testing environment, and seamless API generation

### Selected Features for Implementation

1. **Model Selection Interface** - Dropdown/sidebar for easy model switching
2. **Parameter Controls** - Intuitive sliders and inputs for temperature, max tokens, etc.
3. **Prompt Editor** - Rich text editor with template save/load functionality
4. **Chat Interface** - Clean conversation display with copy/download actions
5. **Theme Toggle** - Light/dark mode with persistent preferences
6. **Responsive Design** - Mobile-first approach with desktop optimization
7. **Template System** - Save and load prompt templates
8. **Export Functionality** - Download conversations as JSON

## Design

### Design Philosophy
The interface follows a clean, modern design approach with:
- **Minimalist Layout**: Focus on functionality without clutter
- **Consistent Spacing**: Using Tailwind's spacing scale (4, 8, 12, 16, 24, 32px)
- **Typography Hierarchy**: Clear heading structure with proper contrast
- **Color System**: Semantic colors for different states and actions

### Tailwind Token Mapping

#### Spacing
- `space-1` (4px) - Micro spacing
- `space-2` (8px) - Small spacing  
- `space-3` (12px) - Medium spacing
- `space-4` (16px) - Large spacing
- `space-6` (24px) - Section spacing
- `space-8` (32px) - Major spacing

#### Colors
- `bg-gray-50` - Light background
- `bg-gray-900` - Dark background
- `text-gray-900` - Primary text
- `text-gray-600` - Secondary text
- `border-gray-200` - Light borders
- `border-gray-700` - Dark borders

#### Typography
- `text-2xl` - Main headings
- `text-lg` - Section headings
- `text-base` - Body text
- `text-sm` - Small text
- `font-medium` - Medium weight
- `font-semibold` - Bold weight

### Component Design
- **Cards**: Rounded corners (`rounded-lg`), subtle shadows (`shadow-sm`)
- **Buttons**: Consistent padding (`px-4 py-2`), hover states
- **Inputs**: Clean borders, focus states with ring effects
- **Modals**: Backdrop blur, centered positioning

## Development

### Tech Stack
- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS
- **State Management**: React Context + useReducer
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **Documentation**: Storybook

### Project Structure
```
src/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── ui/
│   │   ├── Button.tsx
│   │   ├── Slider.tsx
│   │   ├── Modal.tsx
│   │   └── ChatBubble.tsx
│   ├── ModelSelector.tsx
│   ├── PromptEditor.tsx
│   ├── ParametersPanel.tsx
│   ├── ChatArea.tsx
│   └── ThemeToggle.tsx
├── context/
│   └── AppContext.tsx
├── hooks/
│   └── useLocalStorage.ts
├── types/
│   └── index.ts
└── data/
    ├── models.json
    └── templates.json
```

### Key Features Implemented

#### 1. Model Selection
- Dropdown interface for model selection
- Real-time model switching
- Model information display

#### 2. Prompt Editor
- Rich text editing capabilities
- Template save/load functionality
- Auto-save to localStorage
- Character count and validation

#### 3. Parameters Panel
- Temperature slider (0-2)
- Max tokens input
- Top-p slider (0-1)
- Frequency penalty controls
- Real-time parameter updates

#### 4. Chat Interface
- Message history display
- Copy to clipboard functionality
- Download as JSON
- Streaming response simulation
- Message timestamps

#### 5. Theme System
- Light/dark mode toggle
- Persistent theme preference
- Smooth transitions
- System preference detection

#### 6. Responsive Design
- Mobile-first approach
- Breakpoint-specific layouts
- Touch-friendly controls
- Optimized for all screen sizes

### Mock API Setup
- `/api/models` - Returns available AI models
- `/api/templates` - Returns prompt templates
- `/api/chat` - Simulates AI response generation

### Accessibility Features
- Full keyboard navigation
- ARIA labels and descriptions
- Focus management
- Screen reader support
- High contrast mode support

### Performance Optimizations
- Code splitting
- Lazy loading
- Memoized components
- Optimized re-renders
- Efficient state management

### Known Limitations
- Mock API responses (no real AI integration)
- Limited template categories
- Basic streaming simulation
- No real-time collaboration features

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation
```bash
npm install
npm run dev
```

### Development
```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run Storybook
npm run storybook
```

### Deployment
The application is configured for deployment on Vercel, Netlify, or GitHub Pages.

## License
MIT License - see LICENSE file for details