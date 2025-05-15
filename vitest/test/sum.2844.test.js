
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 25 + 59 to equal 84', () => {
  expect(sum(25, 59)).toBe(84);
});
