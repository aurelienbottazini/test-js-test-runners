
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 54 + 88 to equal 142', () => {
  expect(sum(54, 88)).toBe(142);
});
