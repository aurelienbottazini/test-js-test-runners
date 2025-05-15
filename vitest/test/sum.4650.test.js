
import sum4650 from '../sum4650.js';
import { expect, test } from 'vitest';

test('adds 46 + 89 to equal 135 + offset 0.08308989131801892', () => {
  expect(sum4650(46, 89)).toBe(135 + 0.08308989131801892);
});
