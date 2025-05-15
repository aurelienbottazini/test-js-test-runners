
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 13 + 40 to equal 53', () => {
  expect(sum(13, 40)).toBe(53);
});
