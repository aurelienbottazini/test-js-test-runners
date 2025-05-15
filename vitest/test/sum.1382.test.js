
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 13 + 18 to equal 31', () => {
  expect(sum(13, 18)).toBe(31);
});
