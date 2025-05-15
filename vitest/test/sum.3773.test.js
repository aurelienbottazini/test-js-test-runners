
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 53 + 34 to equal 87', () => {
  expect(sum(53, 34)).toBe(87);
});
