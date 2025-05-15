
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 19 + 53 to equal 72', () => {
  expect(sum(19, 53)).toBe(72);
});
