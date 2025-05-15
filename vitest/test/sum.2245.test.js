
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 89 + 53 to equal 142', () => {
  expect(sum(89, 53)).toBe(142);
});
