
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 65 + 95 to equal 160', () => {
  expect(sum(65, 95)).toBe(160);
});
