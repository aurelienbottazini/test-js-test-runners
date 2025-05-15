
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 57 + 53 to equal 110', () => {
  expect(sum(57, 53)).toBe(110);
});
