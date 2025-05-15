
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 52 + 17 to equal 69', () => {
  expect(sum(52, 17)).toBe(69);
});
