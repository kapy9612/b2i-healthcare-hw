const highlightText = (text: string, highlight: string) => {
  if (!highlight.trim()) {
    return text;
  }
  const regex = new RegExp(`(${highlight})`, 'gi');
  return text.replace(regex, '<strong>$1</strong>');
};

export default highlightText;
