
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 75 + 95 to equal 170', () => {
  expect(sum(75, 95)).toBe(170);
});
