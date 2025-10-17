export function generateDefaultTopics(description: string, title: string): string[] {
  const descParts = description.split(/,| and /).map(s => s.trim()).filter(s => s.length > 0);

  const topics: string[] = [];
  const actionVerbs = ['Learn', 'Understand', 'Master', 'Implement', 'Work with', 'Apply'];

  if (descParts.length >= 2) {
    descParts.slice(0, 4).forEach((part, index) => {
      const verb = actionVerbs[index % actionVerbs.length];
      const cleanPart = part.charAt(0).toLowerCase() + part.slice(1);
      topics.push(`${verb} ${cleanPart}`);
    });
  } else {
    const titleLower = title.toLowerCase();
    topics.push(`Master ${titleLower} fundamentals`);
    topics.push(`Apply ${titleLower} concepts in practice`);
    topics.push(`Understand core principles`);
    topics.push(`Build practical solutions`);
  }

  return topics.slice(0, 4);
}
