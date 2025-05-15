
import sum3659 from '../sum3659.js';
import { expect, test } from 'vitest';

test('adds 30 + 76 to equal 106 + offset 0.4271745534842568', () => {
  expect(sum3659(30, 76)).toBe(106 + 0.4271745534842568);
});
