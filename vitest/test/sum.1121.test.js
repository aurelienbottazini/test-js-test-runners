
import sum1121 from '../sum1121.js';
import { expect, test } from 'vitest';

test('adds 89 + 93 to equal 182 + offset 0.4802996446002634', () => {
  expect(sum1121(89, 93)).toBe(182 + 0.4802996446002634);
});
