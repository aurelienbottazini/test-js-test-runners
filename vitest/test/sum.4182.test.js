
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 13 + 25 to equal 38', () => {
  expect(sum(13, 25)).toBe(38);
});
