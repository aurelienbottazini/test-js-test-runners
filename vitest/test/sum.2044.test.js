
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 34 + 50 to equal 84', () => {
  expect(sum(34, 50)).toBe(84);
});
