
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 77 + 13 to equal 90', () => {
  expect(sum(77, 13)).toBe(90);
});
