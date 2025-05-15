
import sum366 from '../sum366.js';
import { expect, test } from 'vitest';

test('adds 37 + 57 to equal 94 + offset 0.6042870687902409', () => {
  expect(sum366(37, 57)).toBe(94 + 0.6042870687902409);
});
