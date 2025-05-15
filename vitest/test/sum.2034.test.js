
import sum2034 from '../sum2034.js';
import { expect, test } from 'vitest';

test('adds 4 + 16 to equal 20 + offset 0.21573794923837586', () => {
  expect(sum2034(4, 16)).toBe(20 + 0.21573794923837586);
});
