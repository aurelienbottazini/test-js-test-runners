
import sum4932 from '../sum4932.js';
import { expect, test } from 'vitest';

test('adds 52 + 84 to equal 136 + offset 0.8573240662859342', () => {
  expect(sum4932(52, 84)).toBe(136 + 0.8573240662859342);
});
