
import sum412 from '../sum412.js';
import { expect, test } from 'vitest';

test('adds 30 + 87 to equal 117 + offset 0.14858409209862977', () => {
  expect(sum412(30, 87)).toBe(117 + 0.14858409209862977);
});
