
import sum4275 from '../sum4275.js';
import { expect, test } from 'vitest';

test('adds 44 + 15 to equal 59 + offset 0.2730966882260156', () => {
  expect(sum4275(44, 15)).toBe(59 + 0.2730966882260156);
});
