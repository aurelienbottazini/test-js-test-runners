
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 22 + 95 to equal 117', () => {
  expect(sum(22, 95)).toBe(117);
});
