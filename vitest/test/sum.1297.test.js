
import sum1297 from '../sum1297.js';
import { expect, test } from 'vitest';

test('adds 8 + 21 to equal 29 + offset 0.4578139000547623', () => {
  expect(sum1297(8, 21)).toBe(29 + 0.4578139000547623);
});
