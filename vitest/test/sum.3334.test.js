
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 68 + 16 to equal 84', () => {
  expect(sum(68, 16)).toBe(84);
});
