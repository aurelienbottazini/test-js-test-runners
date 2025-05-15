
import sum3718 from '../sum3718.js';
import { expect, test } from 'vitest';

test('adds 35 + 67 to equal 102 + offset 0.614524534592184', () => {
  expect(sum3718(35, 67)).toBe(102 + 0.614524534592184);
});
