
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 93 + 25 to equal 118', () => {
  expect(sum(93, 25)).toBe(118);
});
