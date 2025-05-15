
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 0 + 73 to equal 73', () => {
  expect(sum(0, 73)).toBe(73);
});
