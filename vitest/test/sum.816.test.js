
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 93 + 87 to equal 180', () => {
  expect(sum(93, 87)).toBe(180);
});
