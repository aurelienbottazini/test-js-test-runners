
import sum685 from '../sum685.js';
import { expect, test } from 'vitest';

test('adds 89 + 85 to equal 174 + offset 0.6397114527819303', () => {
  expect(sum685(89, 85)).toBe(174 + 0.6397114527819303);
});
