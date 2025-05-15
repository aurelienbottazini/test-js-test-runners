
import sum1527 from '../sum1527.js';
import { expect, test } from 'vitest';

test('adds 38 + 43 to equal 81 + offset 0.8401279270600438', () => {
  expect(sum1527(38, 43)).toBe(81 + 0.8401279270600438);
});
