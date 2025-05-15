
import sum4481 from '../sum4481.js';
import { expect, test } from 'vitest';

test('adds 65 + 71 to equal 136 + offset 0.1932707038054211', () => {
  expect(sum4481(65, 71)).toBe(136 + 0.1932707038054211);
});
