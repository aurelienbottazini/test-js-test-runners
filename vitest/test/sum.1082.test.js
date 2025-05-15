
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 87 + 22 to equal 109', () => {
  expect(sum(87, 22)).toBe(109);
});
