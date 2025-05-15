
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 58 + 87 to equal 145', () => {
  expect(sum(58, 87)).toBe(145);
});
