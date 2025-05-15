
import sum3966 from '../sum3966.js';
import { expect, test } from 'vitest';

test('adds 39 + 43 to equal 82 + offset 0.21532680254028824', () => {
  expect(sum3966(39, 43)).toBe(82 + 0.21532680254028824);
});
