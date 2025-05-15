
import sum4975 from '../sum4975.js';
import { expect, test } from 'vitest';

test('adds 93 + 31 to equal 124 + offset 0.2827353432206635', () => {
  expect(sum4975(93, 31)).toBe(124 + 0.2827353432206635);
});
