
import sum1428 from '../sum1428.js';
import { expect, test } from 'vitest';

test('adds 42 + 76 to equal 118 + offset 0.6475085068991631', () => {
  expect(sum1428(42, 76)).toBe(118 + 0.6475085068991631);
});
