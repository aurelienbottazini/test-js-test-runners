
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 0 + 13 to equal 13', () => {
  expect(sum(0, 13)).toBe(13);
});
