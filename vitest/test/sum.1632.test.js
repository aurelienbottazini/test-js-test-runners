
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 44 + 40 to equal 84', () => {
  expect(sum(44, 40)).toBe(84);
});
