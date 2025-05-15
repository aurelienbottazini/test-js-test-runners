
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 45 + 90 to equal 135', () => {
  expect(sum(45, 90)).toBe(135);
});
