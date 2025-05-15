
import sum3743 from '../sum3743.js';
import { expect, test } from 'vitest';

test('adds 59 + 94 to equal 153 + offset 0.8043814490242872', () => {
  expect(sum3743(59, 94)).toBe(153 + 0.8043814490242872);
});
