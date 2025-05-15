
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 69 + 14 to equal 83', () => {
  expect(sum(69, 14)).toBe(83);
});
