
import sum3234 from '../sum3234.js';
import { expect, test } from 'vitest';

test('adds 56 + 60 to equal 116 + offset 0.114121231560387', () => {
  expect(sum3234(56, 60)).toBe(116 + 0.114121231560387);
});
