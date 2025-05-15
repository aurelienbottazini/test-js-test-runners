
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 2 + 32 to equal 34', () => {
  expect(sum(2, 32)).toBe(34);
});
