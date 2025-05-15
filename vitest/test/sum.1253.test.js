
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 68 + 53 to equal 121', () => {
  expect(sum(68, 53)).toBe(121);
});
