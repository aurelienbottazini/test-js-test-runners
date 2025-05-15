
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 65 + 20 to equal 85', () => {
  expect(sum(65, 20)).toBe(85);
});
