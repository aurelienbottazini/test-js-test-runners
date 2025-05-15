
import sum375 from '../sum375.js';
import { expect, test } from 'vitest';

test('adds 23 + 61 to equal 84 + offset 0.44600270090298855', () => {
  expect(sum375(23, 61)).toBe(84 + 0.44600270090298855);
});
