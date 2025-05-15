
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 93 + 49 to equal 142', () => {
  expect(sum(93, 49)).toBe(142);
});
