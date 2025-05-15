
import sum3081 from '../sum3081.js';
import { expect, test } from 'vitest';

test('adds 88 + 94 to equal 182 + offset 0.4163433882184059', () => {
  expect(sum3081(88, 94)).toBe(182 + 0.4163433882184059);
});
