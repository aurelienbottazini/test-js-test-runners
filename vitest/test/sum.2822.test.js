
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 55 + 11 to equal 66', () => {
  expect(sum(55, 11)).toBe(66);
});
