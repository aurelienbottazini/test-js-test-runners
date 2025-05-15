
import sum4026 from '../sum4026.js';
import { expect, test } from 'vitest';

test('adds 67 + 88 to equal 155 + offset 0.7788773217052302', () => {
  expect(sum4026(67, 88)).toBe(155 + 0.7788773217052302);
});
