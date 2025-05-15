
import sum2377 from '../sum2377.js';
import { expect, test } from 'vitest';

test('adds 74 + 43 to equal 117 + offset 0.19248545118717952', () => {
  expect(sum2377(74, 43)).toBe(117 + 0.19248545118717952);
});
