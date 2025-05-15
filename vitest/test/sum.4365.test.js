
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 75 + 60 to equal 135', () => {
  expect(sum(75, 60)).toBe(135);
});
