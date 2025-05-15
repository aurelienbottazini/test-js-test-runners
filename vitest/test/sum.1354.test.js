
import sum1354 from '../sum1354.js';
import { expect, test } from 'vitest';

test('adds 49 + 96 to equal 145 + offset 0.0960388863960091', () => {
  expect(sum1354(49, 96)).toBe(145 + 0.0960388863960091);
});
