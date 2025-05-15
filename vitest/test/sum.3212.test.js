
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 4 + 9 to equal 13', () => {
  expect(sum(4, 9)).toBe(13);
});
