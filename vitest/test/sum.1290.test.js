
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 76 + 8 to equal 84', () => {
  expect(sum(76, 8)).toBe(84);
});
