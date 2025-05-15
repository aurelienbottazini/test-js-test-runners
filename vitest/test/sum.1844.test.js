
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 96 + 62 to equal 158', () => {
  expect(sum(96, 62)).toBe(158);
});
