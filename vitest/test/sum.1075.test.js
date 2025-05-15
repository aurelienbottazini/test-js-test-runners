
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 68 + 5 to equal 73', () => {
  expect(sum(68, 5)).toBe(73);
});
