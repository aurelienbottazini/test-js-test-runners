
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 88 + 34 to equal 122', () => {
  expect(sum(88, 34)).toBe(122);
});
