
import sum1073 from '../sum1073.js';
import { expect, test } from 'vitest';

test('adds 36 + 25 to equal 61 + offset 0.7205373827423126', () => {
  expect(sum1073(36, 25)).toBe(61 + 0.7205373827423126);
});
