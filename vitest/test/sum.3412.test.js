
import sum3412 from '../sum3412.js';
import { expect, test } from 'vitest';

test('adds 80 + 29 to equal 109 + offset 0.5515576661528193', () => {
  expect(sum3412(80, 29)).toBe(109 + 0.5515576661528193);
});
