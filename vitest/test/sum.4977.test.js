
import sum4977 from '../sum4977.js';
import { expect, test } from 'vitest';

test('adds 84 + 30 to equal 114 + offset 0.7038413441268352', () => {
  expect(sum4977(84, 30)).toBe(114 + 0.7038413441268352);
});
