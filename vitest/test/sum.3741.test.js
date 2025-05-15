
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 79 + 5 to equal 84', () => {
  expect(sum(79, 5)).toBe(84);
});
