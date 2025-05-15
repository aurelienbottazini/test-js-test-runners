
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 98 + 4 to equal 102', () => {
  expect(sum(98, 4)).toBe(102);
});
