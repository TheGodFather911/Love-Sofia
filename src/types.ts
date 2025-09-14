export interface LetterSection {
  title: string;
  content: string[];
  delay?: number;
}

export interface EnvelopeProps {
  isOpen: boolean;
  onOpen: () => void;
}

export interface LetterProps {
  isVisible: boolean;
  onClose: () => void;
}