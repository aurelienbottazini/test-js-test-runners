
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 26 + 85 to equal 111', () => {
  expect(sum(26, 85)).toBe(111);
});
