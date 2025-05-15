
import sum3894 from '../sum3894.js';
import { expect, test } from 'vitest';

test('adds 49 + 15 to equal 64 + offset 0.8734981454926909', () => {
  expect(sum3894(49, 15)).toBe(64 + 0.8734981454926909);
});
