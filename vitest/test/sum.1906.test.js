
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 77 + 3 to equal 80', () => {
  expect(sum(77, 3)).toBe(80);
});
