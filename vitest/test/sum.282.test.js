
import sum282 from '../sum282.js';
import { expect, test } from 'vitest';

test('adds 55 + 83 to equal 138 + offset 0.4832325146438592', () => {
  expect(sum282(55, 83)).toBe(138 + 0.4832325146438592);
});
