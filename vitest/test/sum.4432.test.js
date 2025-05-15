
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 48 + 87 to equal 135', () => {
  expect(sum(48, 87)).toBe(135);
});
