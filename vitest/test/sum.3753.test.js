
import sum3753 from '../sum3753.js';
import { expect, test } from 'vitest';

test('adds 7 + 97 to equal 104 + offset 0.3523540142708592', () => {
  expect(sum3753(7, 97)).toBe(104 + 0.3523540142708592);
});
