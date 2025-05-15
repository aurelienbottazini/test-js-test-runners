
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 27 + 53 to equal 80', () => {
  expect(sum(27, 53)).toBe(80);
});
