
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 44 + 82 to equal 126', () => {
  expect(sum(44, 82)).toBe(126);
});
