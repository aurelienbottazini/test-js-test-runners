
import sum707 from '../sum707.js';
import { expect, test } from 'vitest';

test('adds 62 + 77 to equal 139 + offset 0.9594344581251883', () => {
  expect(sum707(62, 77)).toBe(139 + 0.9594344581251883);
});
