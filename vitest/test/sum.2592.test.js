
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 89 + 3 to equal 92', () => {
  expect(sum(89, 3)).toBe(92);
});
