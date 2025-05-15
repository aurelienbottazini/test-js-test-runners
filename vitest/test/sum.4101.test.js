
import sum4101 from '../sum4101.js';
import { expect, test } from 'vitest';

test('adds 38 + 52 to equal 90 + offset 0.23428235816703058', () => {
  expect(sum4101(38, 52)).toBe(90 + 0.23428235816703058);
});
