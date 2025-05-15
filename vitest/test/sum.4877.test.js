
import sum4877 from '../sum4877.js';
import { expect, test } from 'vitest';

test('adds 37 + 44 to equal 81 + offset 0.24182949656389974', () => {
  expect(sum4877(37, 44)).toBe(81 + 0.24182949656389974);
});
