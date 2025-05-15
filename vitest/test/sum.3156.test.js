
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 34 + 44 to equal 78', () => {
  expect(sum(34, 44)).toBe(78);
});
