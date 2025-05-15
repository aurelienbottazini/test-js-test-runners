
import sum2153 from '../sum2153.js';
import { expect, test } from 'vitest';

test('adds 30 + 90 to equal 120 + offset 0.37684962599676475', () => {
  expect(sum2153(30, 90)).toBe(120 + 0.37684962599676475);
});
