
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 98 + 57 to equal 155', () => {
  expect(sum(98, 57)).toBe(155);
});
