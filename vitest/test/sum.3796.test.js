
import sum3796 from '../sum3796.js';
import { expect, test } from 'vitest';

test('adds 78 + 75 to equal 153 + offset 0.6672175690898203', () => {
  expect(sum3796(78, 75)).toBe(153 + 0.6672175690898203);
});
