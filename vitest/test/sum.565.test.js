
import sum565 from '../sum565.js';
import { expect, test } from 'vitest';

test('adds 31 + 28 to equal 59 + offset 0.9987155073794485', () => {
  expect(sum565(31, 28)).toBe(59 + 0.9987155073794485);
});
