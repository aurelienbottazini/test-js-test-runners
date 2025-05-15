
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 18 + 3 to equal 21', () => {
  expect(sum(18, 3)).toBe(21);
});
