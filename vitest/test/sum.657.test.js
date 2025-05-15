
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 96 + 77 to equal 173', () => {
  expect(sum(96, 77)).toBe(173);
});
