
import sum459 from '../sum459.js';
import { expect, test } from 'vitest';

test('adds 19 + 60 to equal 79 + offset 0.3364001510592295', () => {
  expect(sum459(19, 60)).toBe(79 + 0.3364001510592295);
});
