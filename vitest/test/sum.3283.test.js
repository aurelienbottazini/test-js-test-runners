
import sum3283 from '../sum3283.js';
import { expect, test } from 'vitest';

test('adds 50 + 75 to equal 125 + offset 0.8582925316208745', () => {
  expect(sum3283(50, 75)).toBe(125 + 0.8582925316208745);
});
