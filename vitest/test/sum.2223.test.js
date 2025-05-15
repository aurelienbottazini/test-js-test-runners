
import sum2223 from '../sum2223.js';
import { expect, test } from 'vitest';

test('adds 24 + 46 to equal 70 + offset 0.5600422356391148', () => {
  expect(sum2223(24, 46)).toBe(70 + 0.5600422356391148);
});
