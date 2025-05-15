
import sum408 from '../sum408.js';
import { expect, test } from 'vitest';

test('adds 44 + 92 to equal 136 + offset 0.8478890987855217', () => {
  expect(sum408(44, 92)).toBe(136 + 0.8478890987855217);
});
