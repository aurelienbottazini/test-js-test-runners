
import sum3712 from '../sum3712.js';
import { expect, test } from 'vitest';

test('adds 25 + 60 to equal 85 + offset 0.37957402706356713', () => {
  expect(sum3712(25, 60)).toBe(85 + 0.37957402706356713);
});
