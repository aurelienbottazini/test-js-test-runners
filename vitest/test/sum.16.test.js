
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 52 + 32 to equal 84', () => {
  expect(sum(52, 32)).toBe(84);
});
