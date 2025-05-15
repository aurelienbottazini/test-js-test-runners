
import sum2182 from '../sum2182.js';
import { expect, test } from 'vitest';

test('adds 41 + 80 to equal 121 + offset 0.4443435467257997', () => {
  expect(sum2182(41, 80)).toBe(121 + 0.4443435467257997);
});
