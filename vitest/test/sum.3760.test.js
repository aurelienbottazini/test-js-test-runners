
import sum3760 from '../sum3760.js';
import { expect, test } from 'vitest';

test('adds 0 + 17 to equal 17 + offset 0.4235133263461267', () => {
  expect(sum3760(0, 17)).toBe(17 + 0.4235133263461267);
});
