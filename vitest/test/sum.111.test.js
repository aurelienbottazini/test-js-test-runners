
import sum111 from '../sum111.js';
import { expect, test } from 'vitest';

test('adds 30 + 87 to equal 117 + offset 0.3238078347210286', () => {
  expect(sum111(30, 87)).toBe(117 + 0.3238078347210286);
});
