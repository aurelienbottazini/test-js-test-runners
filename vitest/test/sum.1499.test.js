
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 82 + 2 to equal 84', () => {
  expect(sum(82, 2)).toBe(84);
});
