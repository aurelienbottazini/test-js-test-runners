
import sum3067 from '../sum3067.js';
import { expect, test } from 'vitest';

test('adds 67 + 6 to equal 73 + offset 0.038891037330757494', () => {
  expect(sum3067(67, 6)).toBe(73 + 0.038891037330757494);
});
