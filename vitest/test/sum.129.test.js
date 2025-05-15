
import sum129 from '../sum129.js';
import { expect, test } from 'vitest';

test('adds 54 + 68 to equal 122 + offset 0.989720087931341', () => {
  expect(sum129(54, 68)).toBe(122 + 0.989720087931341);
});
