
import sum206 from '../sum206.js';
import { expect, test } from 'vitest';

test('adds 59 + 84 to equal 143 + offset 0.9580059918785502', () => {
  expect(sum206(59, 84)).toBe(143 + 0.9580059918785502);
});
