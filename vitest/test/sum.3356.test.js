
import sum3356 from '../sum3356.js';
import { expect, test } from 'vitest';

test('adds 72 + 10 to equal 82 + offset 0.10955855244817247', () => {
  expect(sum3356(72, 10)).toBe(82 + 0.10955855244817247);
});
