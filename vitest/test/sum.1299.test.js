
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 94 + 17 to equal 111', () => {
  expect(sum(94, 17)).toBe(111);
});
