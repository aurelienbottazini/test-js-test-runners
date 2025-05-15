
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 65 + 52 to equal 117', () => {
  expect(sum(65, 52)).toBe(117);
});
