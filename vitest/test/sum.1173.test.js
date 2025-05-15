
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 40 + 44 to equal 84', () => {
  expect(sum(40, 44)).toBe(84);
});
