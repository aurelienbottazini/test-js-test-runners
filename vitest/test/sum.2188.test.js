
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 58 + 26 to equal 84', () => {
  expect(sum(58, 26)).toBe(84);
});
