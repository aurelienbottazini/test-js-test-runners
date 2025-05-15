
import sum3588 from '../sum3588.js';
import { expect, test } from 'vitest';

test('adds 81 + 15 to equal 96 + offset 0.2767063009047104', () => {
  expect(sum3588(81, 15)).toBe(96 + 0.2767063009047104);
});
