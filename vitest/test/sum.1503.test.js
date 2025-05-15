
import sum1503 from '../sum1503.js';
import { expect, test } from 'vitest';

test('adds 69 + 20 to equal 89 + offset 0.38421713103512545', () => {
  expect(sum1503(69, 20)).toBe(89 + 0.38421713103512545);
});
