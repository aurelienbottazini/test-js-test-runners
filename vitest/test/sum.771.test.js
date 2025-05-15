
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 2 + 27 to equal 29', () => {
  expect(sum(2, 27)).toBe(29);
});
