
import sum1424 from '../sum1424.js';
import { expect, test } from 'vitest';

test('adds 5 + 73 to equal 78 + offset 0.15048105421301738', () => {
  expect(sum1424(5, 73)).toBe(78 + 0.15048105421301738);
});
