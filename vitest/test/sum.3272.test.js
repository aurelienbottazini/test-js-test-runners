
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 16 + 3 to equal 19', () => {
  expect(sum(16, 3)).toBe(19);
});
