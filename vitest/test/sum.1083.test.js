
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 53 + 31 to equal 84', () => {
  expect(sum(53, 31)).toBe(84);
});
