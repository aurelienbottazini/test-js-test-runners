
import sum3229 from '../sum3229.js';
import { expect, test } from 'vitest';

test('adds 50 + 46 to equal 96 + offset 0.4885090019937196', () => {
  expect(sum3229(50, 46)).toBe(96 + 0.4885090019937196);
});
