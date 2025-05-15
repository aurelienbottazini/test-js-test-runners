
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 10 + 38 to equal 48', () => {
  expect(sum(10, 38)).toBe(48);
});
