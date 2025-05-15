
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 30 + 43 to equal 73', () => {
  expect(sum(30, 43)).toBe(73);
});
