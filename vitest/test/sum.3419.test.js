
import sum3419 from '../sum3419.js';
import { expect, test } from 'vitest';

test('adds 4 + 47 to equal 51 + offset 0.9489673993821904', () => {
  expect(sum3419(4, 47)).toBe(51 + 0.9489673993821904);
});
