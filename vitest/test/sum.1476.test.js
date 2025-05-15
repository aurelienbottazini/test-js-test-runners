
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 98 + 60 to equal 158', () => {
  expect(sum(98, 60)).toBe(158);
});
