
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 49 + 35 to equal 84', () => {
  expect(sum(49, 35)).toBe(84);
});
