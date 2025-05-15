
import sum406 from '../sum406.js';
import { expect, test } from 'vitest';

test('adds 36 + 90 to equal 126 + offset 0.12882943184140772', () => {
  expect(sum406(36, 90)).toBe(126 + 0.12882943184140772);
});
