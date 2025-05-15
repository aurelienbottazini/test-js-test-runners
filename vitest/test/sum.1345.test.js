
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 13 + 9 to equal 22', () => {
  expect(sum(13, 9)).toBe(22);
});
