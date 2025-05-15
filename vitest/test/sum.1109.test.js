
import sum1109 from '../sum1109.js';
import { expect, test } from 'vitest';

test('adds 89 + 8 to equal 97 + offset 0.8498583041558498', () => {
  expect(sum1109(89, 8)).toBe(97 + 0.8498583041558498);
});
