
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 55 + 87 to equal 142', () => {
  expect(sum(55, 87)).toBe(142);
});
