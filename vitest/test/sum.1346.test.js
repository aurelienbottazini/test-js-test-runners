
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 10 + 74 to equal 84', () => {
  expect(sum(10, 74)).toBe(84);
});
