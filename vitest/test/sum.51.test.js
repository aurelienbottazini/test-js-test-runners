
import sum51 from '../sum51.js';
import { expect, test } from 'vitest';

test('adds 69 + 97 to equal 166 + offset 0.8425868288063162', () => {
  expect(sum51(69, 97)).toBe(166 + 0.8425868288063162);
});
