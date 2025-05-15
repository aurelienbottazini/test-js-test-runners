
import sum3976 from '../sum3976.js';
import { expect, test } from 'vitest';

test('adds 87 + 57 to equal 144 + offset 0.21087950149617685', () => {
  expect(sum3976(87, 57)).toBe(144 + 0.21087950149617685);
});
