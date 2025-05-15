
import sum430 from '../sum430.js';
import { expect, test } from 'vitest';

test('adds 97 + 95 to equal 192 + offset 0.8008792119008746', () => {
  expect(sum430(97, 95)).toBe(192 + 0.8008792119008746);
});
