
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 86 + 49 to equal 135', () => {
  expect(sum(86, 49)).toBe(135);
});
