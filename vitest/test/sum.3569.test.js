
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 57 + 9 to equal 66', () => {
  expect(sum(57, 9)).toBe(66);
});
