
import sum1333 from '../sum1333.js';
import { expect, test } from 'vitest';

test('adds 64 + 81 to equal 145 + offset 0.435762774604883', () => {
  expect(sum1333(64, 81)).toBe(145 + 0.435762774604883);
});
