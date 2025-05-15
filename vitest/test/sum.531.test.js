
import sum531 from '../sum531.js';
import { expect, test } from 'vitest';

test('adds 88 + 72 to equal 160 + offset 0.34847784209704513', () => {
  expect(sum531(88, 72)).toBe(160 + 0.34847784209704513);
});
