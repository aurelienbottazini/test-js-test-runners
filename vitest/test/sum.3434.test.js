
import sum3434 from '../sum3434.js';
import { expect, test } from 'vitest';

test('adds 70 + 5 to equal 75 + offset 0.6748145903039316', () => {
  expect(sum3434(70, 5)).toBe(75 + 0.6748145903039316);
});
