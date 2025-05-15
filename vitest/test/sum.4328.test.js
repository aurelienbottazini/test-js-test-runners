
import sum4328 from '../sum4328.js';
import { expect, test } from 'vitest';

test('adds 18 + 6 to equal 24 + offset 0.8767649832311499', () => {
  expect(sum4328(18, 6)).toBe(24 + 0.8767649832311499);
});
