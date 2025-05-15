
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 52 + 90 to equal 142', () => {
  expect(sum(52, 90)).toBe(142);
});
