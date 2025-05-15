
import sum3092 from '../sum3092.js';
import { expect, test } from 'vitest';

test('adds 44 + 8 to equal 52 + offset 0.9551000088843037', () => {
  expect(sum3092(44, 8)).toBe(52 + 0.9551000088843037);
});
