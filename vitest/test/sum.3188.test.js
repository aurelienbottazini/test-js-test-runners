
import sum3188 from '../sum3188.js';
import { expect, test } from 'vitest';

test('adds 83 + 16 to equal 99 + offset 0.5147143001771908', () => {
  expect(sum3188(83, 16)).toBe(99 + 0.5147143001771908);
});
