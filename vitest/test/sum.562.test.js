
import sum562 from '../sum562.js';
import { expect, test } from 'vitest';

test('adds 53 + 56 to equal 109 + offset 0.7283479731312328', () => {
  expect(sum562(53, 56)).toBe(109 + 0.7283479731312328);
});
