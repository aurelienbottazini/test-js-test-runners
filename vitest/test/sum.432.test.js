
import sum432 from '../sum432.js';
import { expect, test } from 'vitest';

test('adds 65 + 29 to equal 94 + offset 0.9751045839799051', () => {
  expect(sum432(65, 29)).toBe(94 + 0.9751045839799051);
});
