
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 76 + 66 to equal 142', () => {
  expect(sum(76, 66)).toBe(142);
});
