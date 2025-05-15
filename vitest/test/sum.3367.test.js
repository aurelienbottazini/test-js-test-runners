
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 57 + 78 to equal 135', () => {
  expect(sum(57, 78)).toBe(135);
});
