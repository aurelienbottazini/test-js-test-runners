
import sum3141 from '../sum3141.js';
import { expect, test } from 'vitest';

test('adds 85 + 33 to equal 118 + offset 0.509929544005406', () => {
  expect(sum3141(85, 33)).toBe(118 + 0.509929544005406);
});
