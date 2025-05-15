
import sum1189 from '../sum1189.js';
import { expect, test } from 'vitest';

test('adds 13 + 27 to equal 40 + offset 0.735364657749865', () => {
  expect(sum1189(13, 27)).toBe(40 + 0.735364657749865);
});
