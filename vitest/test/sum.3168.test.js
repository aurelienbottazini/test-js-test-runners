
import sum3168 from '../sum3168.js';
import { expect, test } from 'vitest';

test('adds 96 + 45 to equal 141 + offset 0.27902647965953953', () => {
  expect(sum3168(96, 45)).toBe(141 + 0.27902647965953953);
});
