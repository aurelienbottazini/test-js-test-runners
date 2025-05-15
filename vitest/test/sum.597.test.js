
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 40 + 37 to equal 77', () => {
  expect(sum(40, 37)).toBe(77);
});
