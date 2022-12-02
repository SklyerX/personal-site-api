declare global {
  namespace NodeJs {
    interface ProcessEnv {
      TOKEN: string;
    }
  }
}

export {};
