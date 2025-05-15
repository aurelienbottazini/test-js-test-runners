
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 17 + 85 to equal 102', () => {
  expect(sum(17, 85)).toBe(102);
});
