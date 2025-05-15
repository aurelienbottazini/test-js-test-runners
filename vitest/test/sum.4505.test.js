
import sum4505 from '../sum4505.js';
import { expect, test } from 'vitest';

test('adds 65 + 10 to equal 75 + offset 0.6957633564155074', () => {
  expect(sum4505(65, 10)).toBe(75 + 0.6957633564155074);
});
