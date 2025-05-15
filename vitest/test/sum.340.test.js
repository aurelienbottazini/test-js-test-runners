
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 52 + 82 to equal 134', () => {
  expect(sum(52, 82)).toBe(134);
});
