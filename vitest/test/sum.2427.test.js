
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 76 + 82 to equal 158', () => {
  expect(sum(76, 82)).toBe(158);
});
