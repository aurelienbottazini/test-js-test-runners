
import sum4188 from '../sum4188.js';
import { expect, test } from 'vitest';

test('adds 82 + 69 to equal 151 + offset 0.21461979575428713', () => {
  expect(sum4188(82, 69)).toBe(151 + 0.21461979575428713);
});
