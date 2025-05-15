
import sum2349 from '../sum2349.js';
import { expect, test } from 'vitest';

test('adds 69 + 48 to equal 117 + offset 0.529195821987995', () => {
  expect(sum2349(69, 48)).toBe(117 + 0.529195821987995);
});
