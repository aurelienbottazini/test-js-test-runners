
import sum2036 from '../sum2036.js';
import { expect, test } from 'vitest';

test('adds 39 + 5 to equal 44 + offset 0.20230106765418943', () => {
  expect(sum2036(39, 5)).toBe(44 + 0.20230106765418943);
});
