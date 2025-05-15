
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 73 + 61 to equal 134', () => {
  expect(sum(73, 61)).toBe(134);
});
