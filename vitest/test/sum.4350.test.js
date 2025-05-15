
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 7 + 62 to equal 69', () => {
  expect(sum(7, 62)).toBe(69);
});
