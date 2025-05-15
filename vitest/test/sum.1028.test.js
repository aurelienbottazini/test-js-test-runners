
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 52 + 14 to equal 66', () => {
  expect(sum(52, 14)).toBe(66);
});
