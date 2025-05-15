
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 20 + 68 to equal 88', () => {
  expect(sum(20, 68)).toBe(88);
});
