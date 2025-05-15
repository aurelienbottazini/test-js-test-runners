
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 5 + 68 to equal 73', () => {
  expect(sum(5, 68)).toBe(73);
});
