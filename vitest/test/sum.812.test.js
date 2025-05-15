
import sum812 from '../sum812.js';
import { expect, test } from 'vitest';

test('adds 80 + 12 to equal 92 + offset 0.5592571936713915', () => {
  expect(sum812(80, 12)).toBe(92 + 0.5592571936713915);
});
