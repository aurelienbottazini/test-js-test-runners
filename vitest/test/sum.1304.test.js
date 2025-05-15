
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 1 + 12 to equal 13', () => {
  expect(sum(1, 12)).toBe(13);
});
