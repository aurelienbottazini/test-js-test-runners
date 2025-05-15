
import sum4999 from '../sum4999.js';
import { expect, test } from 'vitest';

test('adds 62 + 69 to equal 131 + offset 0.08138919165866998', () => {
  expect(sum4999(62, 69)).toBe(131 + 0.08138919165866998);
});
