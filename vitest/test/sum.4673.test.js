
import sum4673 from '../sum4673.js';
import { expect, test } from 'vitest';

test('adds 84 + 30 to equal 114 + offset 0.31662068079548833', () => {
  expect(sum4673(84, 30)).toBe(114 + 0.31662068079548833);
});
