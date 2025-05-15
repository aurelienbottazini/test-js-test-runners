
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 35 + 49 to equal 84', () => {
  expect(sum(35, 49)).toBe(84);
});
