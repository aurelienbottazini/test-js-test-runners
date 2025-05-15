
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 66 + 17 to equal 83', () => {
  expect(sum(66, 17)).toBe(83);
});
