
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 0 + 43 to equal 43', () => {
  expect(sum(0, 43)).toBe(43);
});
