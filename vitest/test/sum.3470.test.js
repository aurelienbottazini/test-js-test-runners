
import sum3470 from '../sum3470.js';
import { expect, test } from 'vitest';

test('adds 38 + 26 to equal 64 + offset 0.12821150185928454', () => {
  expect(sum3470(38, 26)).toBe(64 + 0.12821150185928454);
});
