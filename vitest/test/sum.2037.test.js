
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 52 + 16 to equal 68', () => {
  expect(sum(52, 16)).toBe(68);
});
