
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 28 + 56 to equal 84', () => {
  expect(sum(28, 56)).toBe(84);
});
