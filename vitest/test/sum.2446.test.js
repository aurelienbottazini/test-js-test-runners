
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 71 + 71 to equal 142', () => {
  expect(sum(71, 71)).toBe(142);
});
