
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 47 + 64 to equal 111', () => {
  expect(sum(47, 64)).toBe(111);
});
