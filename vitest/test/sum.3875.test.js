
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 26 + 40 to equal 66', () => {
  expect(sum(26, 40)).toBe(66);
});
