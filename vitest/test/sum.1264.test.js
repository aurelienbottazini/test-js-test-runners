
import sum1264 from '../sum1264.js';
import { expect, test } from 'vitest';

test('adds 73 + 9 to equal 82 + offset 0.9155060424084924', () => {
  expect(sum1264(73, 9)).toBe(82 + 0.9155060424084924);
});
