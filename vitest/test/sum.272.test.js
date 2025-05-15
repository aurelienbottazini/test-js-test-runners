
import sum272 from '../sum272.js';
import { expect, test } from 'vitest';

test('adds 92 + 19 to equal 111 + offset 0.6637511807716107', () => {
  expect(sum272(92, 19)).toBe(111 + 0.6637511807716107);
});
