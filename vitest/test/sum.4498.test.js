
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 20 + 53 to equal 73', () => {
  expect(sum(20, 53)).toBe(73);
});
