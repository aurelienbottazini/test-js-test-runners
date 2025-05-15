
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 17 + 94 to equal 111', () => {
  expect(sum(17, 94)).toBe(111);
});
