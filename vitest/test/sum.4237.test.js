
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 43 + 0 to equal 43', () => {
  expect(sum(43, 0)).toBe(43);
});
