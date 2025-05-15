
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 55 + 18 to equal 73', () => {
  expect(sum(55, 18)).toBe(73);
});
