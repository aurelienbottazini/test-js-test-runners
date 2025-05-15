
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 53 + 49 to equal 102', () => {
  expect(sum(53, 49)).toBe(102);
});
