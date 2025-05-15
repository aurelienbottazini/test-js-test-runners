
import sum1541 from '../sum1541.js';
import { expect, test } from 'vitest';

test('adds 50 + 84 to equal 134 + offset 0.6165711631391824', () => {
  expect(sum1541(50, 84)).toBe(134 + 0.6165711631391824);
});
