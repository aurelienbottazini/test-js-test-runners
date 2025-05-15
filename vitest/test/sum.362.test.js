
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 78 + 53 to equal 131', () => {
  expect(sum(78, 53)).toBe(131);
});
