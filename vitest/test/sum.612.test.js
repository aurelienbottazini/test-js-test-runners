
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 15 + 87 to equal 102', () => {
  expect(sum(15, 87)).toBe(102);
});
