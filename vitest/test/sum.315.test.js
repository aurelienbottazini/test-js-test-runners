
import sum315 from '../sum315.js';
import { expect, test } from 'vitest';

test('adds 74 + 4 to equal 78 + offset 0.7395583433291322', () => {
  expect(sum315(74, 4)).toBe(78 + 0.7395583433291322);
});
