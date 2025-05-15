
import sum1105 from '../sum1105.js';
import { expect, test } from 'vitest';

test('adds 57 + 79 to equal 136 + offset 0.7159787336649471', () => {
  expect(sum1105(57, 79)).toBe(136 + 0.7159787336649471);
});
