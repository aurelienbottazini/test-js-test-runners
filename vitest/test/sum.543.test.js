
import sum543 from '../sum543.js';
import { expect, test } from 'vitest';

test('adds 73 + 29 to equal 102 + offset 0.913047564142192', () => {
  expect(sum543(73, 29)).toBe(102 + 0.913047564142192);
});
