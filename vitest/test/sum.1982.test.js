
import sum1982 from '../sum1982.js';
import { expect, test } from 'vitest';

test('adds 45 + 44 to equal 89 + offset 0.07525468870201257', () => {
  expect(sum1982(45, 44)).toBe(89 + 0.07525468870201257);
});
