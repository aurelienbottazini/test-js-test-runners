
import sum1053 from '../sum1053.js';
import { expect, test } from 'vitest';

test('adds 86 + 88 to equal 174 + offset 0.3176656285545554', () => {
  expect(sum1053(86, 88)).toBe(174 + 0.3176656285545554);
});
