
import sum1933 from '../sum1933.js';
import { expect, test } from 'vitest';

test('adds 2 + 67 to equal 69 + offset 0.9410783087081873', () => {
  expect(sum1933(2, 67)).toBe(69 + 0.9410783087081873);
});
