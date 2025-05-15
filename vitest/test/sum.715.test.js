
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 84 + 0 to equal 84', () => {
  expect(sum(84, 0)).toBe(84);
});
