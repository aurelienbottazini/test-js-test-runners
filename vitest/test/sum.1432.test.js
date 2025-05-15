
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 48 + 18 to equal 66', () => {
  expect(sum(48, 18)).toBe(66);
});
