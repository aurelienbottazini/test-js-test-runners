
import sum515 from '../sum515.js';
import { expect, test } from 'vitest';

test('adds 39 + 84 to equal 123 + offset 0.7397018679064237', () => {
  expect(sum515(39, 84)).toBe(123 + 0.7397018679064237);
});
