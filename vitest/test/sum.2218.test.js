
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 45 + 76 to equal 121', () => {
  expect(sum(45, 76)).toBe(121);
});
