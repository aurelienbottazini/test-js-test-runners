
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 66 + 3 to equal 69', () => {
  expect(sum(66, 3)).toBe(69);
});
