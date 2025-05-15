
import sum1210 from '../sum1210.js';
import { expect, test } from 'vitest';

test('adds 84 + 12 to equal 96 + offset 0.7497904856654293', () => {
  expect(sum1210(84, 12)).toBe(96 + 0.7497904856654293);
});
