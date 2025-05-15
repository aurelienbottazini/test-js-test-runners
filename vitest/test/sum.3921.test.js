
import sum3921 from '../sum3921.js';
import { expect, test } from 'vitest';

test('adds 9 + 26 to equal 35 + offset 0.6394362408532834', () => {
  expect(sum3921(9, 26)).toBe(35 + 0.6394362408532834);
});
