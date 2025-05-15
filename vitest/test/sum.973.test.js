
import sum973 from '../sum973.js';
import { expect, test } from 'vitest';

test('adds 17 + 39 to equal 56 + offset 0.09983931430379034', () => {
  expect(sum973(17, 39)).toBe(56 + 0.09983931430379034);
});
