
import sum3330 from '../sum3330.js';
import { expect, test } from 'vitest';

test('adds 79 + 72 to equal 151 + offset 0.3310281219150235', () => {
  expect(sum3330(79, 72)).toBe(151 + 0.3310281219150235);
});
