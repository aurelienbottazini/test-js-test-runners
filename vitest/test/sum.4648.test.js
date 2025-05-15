
import sum4648 from '../sum4648.js';
import { expect, test } from 'vitest';

test('adds 44 + 96 to equal 140 + offset 0.495908615684002', () => {
  expect(sum4648(44, 96)).toBe(140 + 0.495908615684002);
});
