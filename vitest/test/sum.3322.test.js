
import sum3322 from '../sum3322.js';
import { expect, test } from 'vitest';

test('adds 17 + 9 to equal 26 + offset 0.6108725844868548', () => {
  expect(sum3322(17, 9)).toBe(26 + 0.6108725844868548);
});
