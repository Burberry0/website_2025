/// <reference types="vite/client" />

// For direct imports
declare module '*.svg' {
  const content: string;
  export default content;
}

declare module '*.png' {
  const content: string;
  export default content;
}

declare module '*.jpg' {
  const content: string;
  export default content;
}

declare module '*.jpeg' {
  const content: string;
  export default content;
}

// For URL imports
declare module '*.svg?url' {
  const content: string;
  export default content;
}

declare module '*.png?url' {
  const content: string;
  export default content;
}

declare module '*.jpg?url' {
  const content: string;
  export default content;
}

declare module '*.jpeg?url' {
  const content: string;
  export default content;
} 