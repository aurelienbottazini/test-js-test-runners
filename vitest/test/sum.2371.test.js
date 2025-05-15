
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 75 + 53 to equal 128', () => {
  expect(sum(75, 53)).toBe(128);
});
