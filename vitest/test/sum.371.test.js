
import sum371 from '../sum371.js';
import { expect, test } from 'vitest';

test('adds 82 + 38 to equal 120 + offset 0.7104325313841597', () => {
  expect(sum371(82, 38)).toBe(120 + 0.7104325313841597);
});
