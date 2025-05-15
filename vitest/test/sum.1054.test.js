
import sum1054 from '../sum1054.js';
import { expect, test } from 'vitest';

test('adds 26 + 59 to equal 85 + offset 0.2799427004681114', () => {
  expect(sum1054(26, 59)).toBe(85 + 0.2799427004681114);
});
