
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 27 + 2 to equal 29', () => {
  expect(sum(27, 2)).toBe(29);
});
