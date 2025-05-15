
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 18 + 84 to equal 102', () => {
  expect(sum(18, 84)).toBe(102);
});
