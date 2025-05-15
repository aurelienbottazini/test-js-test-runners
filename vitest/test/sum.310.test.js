
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 55 + 16 to equal 71', () => {
  expect(sum(55, 16)).toBe(71);
});
