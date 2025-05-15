
import sum113 from '../sum113.js';
import { expect, test } from 'vitest';

test('adds 97 + 41 to equal 138 + offset 0.7233267021465251', () => {
  expect(sum113(97, 41)).toBe(138 + 0.7233267021465251);
});
