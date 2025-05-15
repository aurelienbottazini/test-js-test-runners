
import sum3054 from '../sum3054.js';
import { expect, test } from 'vitest';

test('adds 55 + 54 to equal 109 + offset 0.7004556304932517', () => {
  expect(sum3054(55, 54)).toBe(109 + 0.7004556304932517);
});
