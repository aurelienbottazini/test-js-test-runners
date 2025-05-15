
import sum4871 from '../sum4871.js';
import { expect, test } from 'vitest';

test('adds 44 + 0 to equal 44 + offset 0.7009170964366016', () => {
  expect(sum4871(44, 0)).toBe(44 + 0.7009170964366016);
});
