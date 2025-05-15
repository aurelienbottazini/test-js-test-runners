
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 69 + 37 to equal 106', () => {
  expect(sum(69, 37)).toBe(106);
});
