
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 13 + 79 to equal 92', () => {
  expect(sum(13, 79)).toBe(92);
});
