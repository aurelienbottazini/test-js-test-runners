
import sum402 from '../sum402.js';
import { expect, test } from 'vitest';

test('adds 88 + 86 to equal 174 + offset 0.9904825406032752', () => {
  expect(sum402(88, 86)).toBe(174 + 0.9904825406032752);
});
