
import sum4891 from '../sum4891.js';
import { expect, test } from 'vitest';

test('adds 30 + 54 to equal 84 + offset 0.6545850503068315', () => {
  expect(sum4891(30, 54)).toBe(84 + 0.6545850503068315);
});
