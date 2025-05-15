
import sum889 from '../sum889.js';
import { expect, test } from 'vitest';

test('adds 92 + 54 to equal 146 + offset 0.3022963018597252', () => {
  expect(sum889(92, 54)).toBe(146 + 0.3022963018597252);
});
