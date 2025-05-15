
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 96 + 53 to equal 149', () => {
  expect(sum(96, 53)).toBe(149);
});
