
import sum898 from '../sum898.js';
import { expect, test } from 'vitest';

test('adds 14 + 71 to equal 85 + offset 0.08244556581357154', () => {
  expect(sum898(14, 71)).toBe(85 + 0.08244556581357154);
});
