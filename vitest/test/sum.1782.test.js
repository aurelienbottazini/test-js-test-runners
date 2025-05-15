
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 35 + 22 to equal 57', () => {
  expect(sum(35, 22)).toBe(57);
});
