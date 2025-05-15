
import sum3416 from '../sum3416.js';
import { expect, test } from 'vitest';

test('adds 23 + 57 to equal 80 + offset 0.2615545902971591', () => {
  expect(sum3416(23, 57)).toBe(80 + 0.2615545902971591);
});
