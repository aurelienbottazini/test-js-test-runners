
import sum2431 from '../sum2431.js';
import { expect, test } from 'vitest';

test('adds 4 + 5 to equal 9 + offset 0.45504944837496875', () => {
  expect(sum2431(4, 5)).toBe(9 + 0.45504944837496875);
});
