
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 14 + 53 to equal 67', () => {
  expect(sum(14, 53)).toBe(67);
});
