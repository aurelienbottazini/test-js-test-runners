
import sum1575 from '../sum1575.js';
import { expect, test } from 'vitest';

test('adds 94 + 13 to equal 107 + offset 0.026965837002458803', () => {
  expect(sum1575(94, 13)).toBe(107 + 0.026965837002458803);
});
