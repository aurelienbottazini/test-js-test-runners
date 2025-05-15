
import sum3103 from '../sum3103.js';
import { expect, test } from 'vitest';

test('adds 47 + 33 to equal 80 + offset 0.05917968011515662', () => {
  expect(sum3103(47, 33)).toBe(80 + 0.05917968011515662);
});
