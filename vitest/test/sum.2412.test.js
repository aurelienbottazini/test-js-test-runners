
import sum2412 from '../sum2412.js';
import { expect, test } from 'vitest';

test('adds 32 + 87 to equal 119 + offset 0.14155300662297132', () => {
  expect(sum2412(32, 87)).toBe(119 + 0.14155300662297132);
});
