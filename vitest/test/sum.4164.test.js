
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 6 + 82 to equal 88', () => {
  expect(sum(6, 82)).toBe(88);
});
