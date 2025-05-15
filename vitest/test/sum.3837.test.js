
import sum3837 from '../sum3837.js';
import { expect, test } from 'vitest';

test('adds 81 + 13 to equal 94 + offset 0.4463785292145105', () => {
  expect(sum3837(81, 13)).toBe(94 + 0.4463785292145105);
});
