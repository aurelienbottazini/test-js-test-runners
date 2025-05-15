
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 11 + 18 to equal 29', () => {
  expect(sum(11, 18)).toBe(29);
});
