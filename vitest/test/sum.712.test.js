
import sum712 from '../sum712.js';
import { expect, test } from 'vitest';

test('adds 90 + 85 to equal 175 + offset 0.9711458407711805', () => {
  expect(sum712(90, 85)).toBe(175 + 0.9711458407711805);
});
