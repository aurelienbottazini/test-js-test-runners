
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 30 + 18 to equal 48', () => {
  expect(sum(30, 18)).toBe(48);
});
