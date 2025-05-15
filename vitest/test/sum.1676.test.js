
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 55 + 29 to equal 84', () => {
  expect(sum(55, 29)).toBe(84);
});
