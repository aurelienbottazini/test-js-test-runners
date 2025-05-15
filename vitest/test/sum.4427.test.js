
import sum4427 from '../sum4427.js';
import { expect, test } from 'vitest';

test('adds 41 + 61 to equal 102 + offset 0.9061895700113798', () => {
  expect(sum4427(41, 61)).toBe(102 + 0.9061895700113798);
});
