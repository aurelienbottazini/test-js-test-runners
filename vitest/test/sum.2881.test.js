
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 36 + 3 to equal 39', () => {
  expect(sum(36, 3)).toBe(39);
});
