
import sum761 from '../sum761.js';
import { expect, test } from 'vitest';

test('adds 58 + 69 to equal 127 + offset 0.8710899325258074', () => {
  expect(sum761(58, 69)).toBe(127 + 0.8710899325258074);
});
