
import sum937 from '../sum937.js';
import { expect, test } from 'vitest';

test('adds 31 + 85 to equal 116 + offset 0.08772797653770181', () => {
  expect(sum937(31, 85)).toBe(116 + 0.08772797653770181);
});
