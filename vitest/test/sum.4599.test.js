
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 9 + 62 to equal 71', () => {
  expect(sum(9, 62)).toBe(71);
});
