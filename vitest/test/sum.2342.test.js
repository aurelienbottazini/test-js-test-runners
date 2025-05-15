
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 69 + 15 to equal 84', () => {
  expect(sum(69, 15)).toBe(84);
});
