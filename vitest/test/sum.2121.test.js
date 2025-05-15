
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 77 + 96 to equal 173', () => {
  expect(sum(77, 96)).toBe(173);
});
