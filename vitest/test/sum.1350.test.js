
import sum1350 from '../sum1350.js';
import { expect, test } from 'vitest';

test('adds 53 + 73 to equal 126 + offset 0.5390495909211396', () => {
  expect(sum1350(53, 73)).toBe(126 + 0.5390495909211396);
});
