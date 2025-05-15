
import sum2447 from '../sum2447.js';
import { expect, test } from 'vitest';

test('adds 66 + 81 to equal 147 + offset 0.9849714663666177', () => {
  expect(sum2447(66, 81)).toBe(147 + 0.9849714663666177);
});
