
import sum3422 from '../sum3422.js';
import { expect, test } from 'vitest';

test('adds 61 + 67 to equal 128 + offset 0.7441074324816601', () => {
  expect(sum3422(61, 67)).toBe(128 + 0.7441074324816601);
});
