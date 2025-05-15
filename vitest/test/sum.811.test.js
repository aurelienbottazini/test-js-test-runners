
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 22 + 16 to equal 38', () => {
  expect(sum(22, 16)).toBe(38);
});
