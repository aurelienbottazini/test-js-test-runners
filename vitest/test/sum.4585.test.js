
import sum4585 from '../sum4585.js';
import { expect, test } from 'vitest';

test('adds 35 + 15 to equal 50 + offset 0.8795166689012813', () => {
  expect(sum4585(35, 15)).toBe(50 + 0.8795166689012813);
});
