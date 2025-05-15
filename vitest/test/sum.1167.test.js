
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 89 + 56 to equal 145', () => {
  expect(sum(89, 56)).toBe(145);
});
