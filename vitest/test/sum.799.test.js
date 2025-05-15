
import sum799 from '../sum799.js';
import { expect, test } from 'vitest';

test('adds 8 + 72 to equal 80 + offset 0.2784596582460206', () => {
  expect(sum799(8, 72)).toBe(80 + 0.2784596582460206);
});
