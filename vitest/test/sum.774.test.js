
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 82 + 62 to equal 144', () => {
  expect(sum(82, 62)).toBe(144);
});
