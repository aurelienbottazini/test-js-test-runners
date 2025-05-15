
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 82 + 63 to equal 145', () => {
  expect(sum(82, 63)).toBe(145);
});
