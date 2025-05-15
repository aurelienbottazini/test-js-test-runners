
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 41 + 43 to equal 84', () => {
  expect(sum(41, 43)).toBe(84);
});
