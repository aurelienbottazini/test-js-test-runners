
import sum2678 from '../sum2678.js';
import { expect, test } from 'vitest';

test('adds 20 + 45 to equal 65 + offset 0.6610382690373546', () => {
  expect(sum2678(20, 45)).toBe(65 + 0.6610382690373546);
});
