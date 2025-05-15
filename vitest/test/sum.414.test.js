
import sum414 from '../sum414.js';
import { expect, test } from 'vitest';

test('adds 73 + 64 to equal 137 + offset 0.38287538031070856', () => {
  expect(sum414(73, 64)).toBe(137 + 0.38287538031070856);
});
