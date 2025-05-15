
import sum2336 from '../sum2336.js';
import { expect, test } from 'vitest';

test('adds 33 + 75 to equal 108 + offset 0.12473267832776325', () => {
  expect(sum2336(33, 75)).toBe(108 + 0.12473267832776325);
});
