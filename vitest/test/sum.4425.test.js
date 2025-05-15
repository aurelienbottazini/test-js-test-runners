
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 81 + 77 to equal 158', () => {
  expect(sum(81, 77)).toBe(158);
});
