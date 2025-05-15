
import sum4033 from '../sum4033.js';
import { expect, test } from 'vitest';

test('adds 53 + 59 to equal 112 + offset 0.7178711473432478', () => {
  expect(sum4033(53, 59)).toBe(112 + 0.7178711473432478);
});
