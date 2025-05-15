
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 63 + 21 to equal 84', () => {
  expect(sum(63, 21)).toBe(84);
});
