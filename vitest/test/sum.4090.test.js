
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 45 + 95 to equal 140', () => {
  expect(sum(45, 95)).toBe(140);
});
