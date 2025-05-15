
import sum4996 from '../sum4996.js';
import { expect, test } from 'vitest';

test('adds 40 + 69 to equal 109 + offset 0.0975935225818888', () => {
  expect(sum4996(40, 69)).toBe(109 + 0.0975935225818888);
});
