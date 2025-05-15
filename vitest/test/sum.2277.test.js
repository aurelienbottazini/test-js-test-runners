
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 20 + 82 to equal 102', () => {
  expect(sum(20, 82)).toBe(102);
});
