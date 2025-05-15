
import sum1588 from '../sum1588.js';
import { expect, test } from 'vitest';

test('adds 24 + 95 to equal 119 + offset 0.043904155670855816', () => {
  expect(sum1588(24, 95)).toBe(119 + 0.043904155670855816);
});
