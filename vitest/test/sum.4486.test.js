
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 38 + 35 to equal 73', () => {
  expect(sum(38, 35)).toBe(73);
});
