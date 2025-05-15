
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 95 + 85 to equal 180', () => {
  expect(sum(95, 85)).toBe(180);
});
