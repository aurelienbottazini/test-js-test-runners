
import sum925 from '../sum925.js';
import { expect, test } from 'vitest';

test('adds 21 + 68 to equal 89 + offset 0.6454891253720517', () => {
  expect(sum925(21, 68)).toBe(89 + 0.6454891253720517);
});
