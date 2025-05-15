
import sum513 from '../sum513.js';
import { expect, test } from 'vitest';

test('adds 30 + 28 to equal 58 + offset 0.018719435787680316', () => {
  expect(sum513(30, 28)).toBe(58 + 0.018719435787680316);
});
