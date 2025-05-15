
import sum2875 from '../sum2875.js';
import { expect, test } from 'vitest';

test('adds 3 + 83 to equal 86 + offset 0.976467389256136', () => {
  expect(sum2875(3, 83)).toBe(86 + 0.976467389256136);
});
