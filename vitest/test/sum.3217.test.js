
import sum3217 from '../sum3217.js';
import { expect, test } from 'vitest';

test('adds 13 + 20 to equal 33 + offset 0.8152047123589754', () => {
  expect(sum3217(13, 20)).toBe(33 + 0.8152047123589754);
});
