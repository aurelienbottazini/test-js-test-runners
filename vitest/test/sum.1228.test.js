
import sum1228 from '../sum1228.js';
import { expect, test } from 'vitest';

test('adds 17 + 17 to equal 34 + offset 0.2988340008678053', () => {
  expect(sum1228(17, 17)).toBe(34 + 0.2988340008678053);
});
