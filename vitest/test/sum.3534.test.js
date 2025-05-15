
import sum3534 from '../sum3534.js';
import { expect, test } from 'vitest';

test('adds 71 + 67 to equal 138 + offset 0.9327951616226154', () => {
  expect(sum3534(71, 67)).toBe(138 + 0.9327951616226154);
});
