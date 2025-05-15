
import sum1357 from '../sum1357.js';
import { expect, test } from 'vitest';

test('adds 57 + 88 to equal 145 + offset 0.2680144850873668', () => {
  expect(sum1357(57, 88)).toBe(145 + 0.2680144850873668);
});
