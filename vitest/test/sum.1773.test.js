
import sum1773 from '../sum1773.js';
import { expect, test } from 'vitest';

test('adds 69 + 66 to equal 135 + offset 0.6262412941039902', () => {
  expect(sum1773(69, 66)).toBe(135 + 0.6262412941039902);
});
