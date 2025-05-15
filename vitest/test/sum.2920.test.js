
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 3 + 66 to equal 69', () => {
  expect(sum(3, 66)).toBe(69);
});
