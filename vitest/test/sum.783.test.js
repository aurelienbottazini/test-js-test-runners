
import sum783 from '../sum783.js';
import { expect, test } from 'vitest';

test('adds 63 + 99 to equal 162 + offset 0.2935587279436389', () => {
  expect(sum783(63, 99)).toBe(162 + 0.2935587279436389);
});
