
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 71 + 82 to equal 153', () => {
  expect(sum(71, 82)).toBe(153);
});
