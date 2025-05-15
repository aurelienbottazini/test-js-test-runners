
import sum882 from '../sum882.js';
import { expect, test } from 'vitest';

test('adds 28 + 15 to equal 43 + offset 0.3944249203192626', () => {
  expect(sum882(28, 15)).toBe(43 + 0.3944249203192626);
});
