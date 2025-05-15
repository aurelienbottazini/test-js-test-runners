
import sum891 from '../sum891.js';
import { expect, test } from 'vitest';

test('adds 41 + 70 to equal 111 + offset 0.9847948723754263', () => {
  expect(sum891(41, 70)).toBe(111 + 0.9847948723754263);
});
