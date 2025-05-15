
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 63 + 82 to equal 145', () => {
  expect(sum(63, 82)).toBe(145);
});
