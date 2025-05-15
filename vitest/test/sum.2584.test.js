
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 48 + 67 to equal 115', () => {
  expect(sum(48, 67)).toBe(115);
});
