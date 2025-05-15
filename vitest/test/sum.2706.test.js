
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 58 + 15 to equal 73', () => {
  expect(sum(58, 15)).toBe(73);
});
