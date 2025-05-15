
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 32 + 52 to equal 84', () => {
  expect(sum(32, 52)).toBe(84);
});
