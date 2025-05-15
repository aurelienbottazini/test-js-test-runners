
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 73 + 53 to equal 126', () => {
  expect(sum(73, 53)).toBe(126);
});
