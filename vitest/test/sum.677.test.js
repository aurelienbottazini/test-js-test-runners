
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 67 + 53 to equal 120', () => {
  expect(sum(67, 53)).toBe(120);
});
