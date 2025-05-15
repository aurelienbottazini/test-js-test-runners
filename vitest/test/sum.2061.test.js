
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 35 + 38 to equal 73', () => {
  expect(sum(35, 38)).toBe(73);
});
