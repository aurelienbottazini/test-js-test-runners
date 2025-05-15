
import sum1271 from '../sum1271.js';
import { expect, test } from 'vitest';

test('adds 88 + 43 to equal 131 + offset 0.25176141541468366', () => {
  expect(sum1271(88, 43)).toBe(131 + 0.25176141541468366);
});
