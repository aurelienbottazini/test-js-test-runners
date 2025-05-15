
import sum291 from '../sum291.js';
import { expect, test } from 'vitest';

test('adds 22 + 35 to equal 57 + offset 0.3548022771747317', () => {
  expect(sum291(22, 35)).toBe(57 + 0.3548022771747317);
});
