
import sum634 from '../sum634.js';
import { expect, test } from 'vitest';

test('adds 55 + 94 to equal 149 + offset 0.6264037921148188', () => {
  expect(sum634(55, 94)).toBe(149 + 0.6264037921148188);
});
