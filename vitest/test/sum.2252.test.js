
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 93 + 44 to equal 137', () => {
  expect(sum(93, 44)).toBe(137);
});
