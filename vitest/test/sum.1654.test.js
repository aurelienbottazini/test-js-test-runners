
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 44 + 29 to equal 73', () => {
  expect(sum(44, 29)).toBe(73);
});
