
import sum4767 from '../sum4767.js';
import { expect, test } from 'vitest';

test('adds 94 + 71 to equal 165 + offset 0.30868149284737956', () => {
  expect(sum4767(94, 71)).toBe(165 + 0.30868149284737956);
});
