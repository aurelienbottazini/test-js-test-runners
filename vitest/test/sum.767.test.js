
import sum767 from '../sum767.js';
import { expect, test } from 'vitest';

test('adds 81 + 32 to equal 113 + offset 0.7782547797829428', () => {
  expect(sum767(81, 32)).toBe(113 + 0.7782547797829428);
});
