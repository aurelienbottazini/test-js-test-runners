
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 55 + 77 to equal 132', () => {
  expect(sum(55, 77)).toBe(132);
});
