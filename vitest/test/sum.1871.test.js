
import sum1871 from '../sum1871.js';
import { expect, test } from 'vitest';

test('adds 51 + 51 to equal 102 + offset 0.23937955374388276', () => {
  expect(sum1871(51, 51)).toBe(102 + 0.23937955374388276);
});
