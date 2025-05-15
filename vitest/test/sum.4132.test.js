
import sum4132 from '../sum4132.js';
import { expect, test } from 'vitest';

test('adds 74 + 7 to equal 81 + offset 0.5400923667589396', () => {
  expect(sum4132(74, 7)).toBe(81 + 0.5400923667589396);
});
