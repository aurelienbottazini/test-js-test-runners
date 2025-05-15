
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 93 + 48 to equal 141', () => {
  expect(sum(93, 48)).toBe(141);
});
