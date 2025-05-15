
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 43 + 10 to equal 53', () => {
  expect(sum(43, 10)).toBe(53);
});
