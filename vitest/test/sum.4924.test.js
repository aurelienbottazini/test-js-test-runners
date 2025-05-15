
import sum4924 from '../sum4924.js';
import { expect, test } from 'vitest';

test('adds 14 + 64 to equal 78 + offset 0.40712665494457145', () => {
  expect(sum4924(14, 64)).toBe(78 + 0.40712665494457145);
});
