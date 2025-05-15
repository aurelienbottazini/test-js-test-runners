
import sum1082 from '../sum1082.js';
import { expect, test } from 'vitest';

test('adds 69 + 77 to equal 146 + offset 0.6880677671879994', () => {
  expect(sum1082(69, 77)).toBe(146 + 0.6880677671879994);
});
