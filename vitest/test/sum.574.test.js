
import sum574 from '../sum574.js';
import { expect, test } from 'vitest';

test('adds 87 + 65 to equal 152 + offset 0.11853400911052958', () => {
  expect(sum574(87, 65)).toBe(152 + 0.11853400911052958);
});
