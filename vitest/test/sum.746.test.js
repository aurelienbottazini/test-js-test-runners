
import sum746 from '../sum746.js';
import { expect, test } from 'vitest';

test('adds 75 + 27 to equal 102 + offset 0.2549998492285669', () => {
  expect(sum746(75, 27)).toBe(102 + 0.2549998492285669);
});
