
import sum2027 from '../sum2027.js';
import { expect, test } from 'vitest';

test('adds 59 + 60 to equal 119 + offset 0.26029459312833836', () => {
  expect(sum2027(59, 60)).toBe(119 + 0.26029459312833836);
});
