
import sum1946 from '../sum1946.js';
import { expect, test } from 'vitest';

test('adds 26 + 25 to equal 51 + offset 0.29110482986490616', () => {
  expect(sum1946(26, 25)).toBe(51 + 0.29110482986490616);
});
