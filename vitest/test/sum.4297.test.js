
import sum4297 from '../sum4297.js';
import { expect, test } from 'vitest';

test('adds 11 + 3 to equal 14 + offset 0.6754868895856534', () => {
  expect(sum4297(11, 3)).toBe(14 + 0.6754868895856534);
});
