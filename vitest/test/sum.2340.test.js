
import sum2340 from '../sum2340.js';
import { expect, test } from 'vitest';

test('adds 90 + 21 to equal 111 + offset 0.3835012604069843', () => {
  expect(sum2340(90, 21)).toBe(111 + 0.3835012604069843);
});
