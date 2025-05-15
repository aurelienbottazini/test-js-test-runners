
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 90 + 52 to equal 142', () => {
  expect(sum(90, 52)).toBe(142);
});
