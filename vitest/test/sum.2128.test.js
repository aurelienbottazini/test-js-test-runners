
import sum2128 from '../sum2128.js';
import { expect, test } from 'vitest';

test('adds 90 + 96 to equal 186 + offset 0.007067569285333364', () => {
  expect(sum2128(90, 96)).toBe(186 + 0.007067569285333364);
});
