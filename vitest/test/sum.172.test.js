
import sum172 from '../sum172.js';
import { expect, test } from 'vitest';

test('adds 36 + 52 to equal 88 + offset 0.15994226240873421', () => {
  expect(sum172(36, 52)).toBe(88 + 0.15994226240873421);
});
