
import sum641 from '../sum641.js';
import { expect, test } from 'vitest';

test('adds 91 + 65 to equal 156 + offset 0.2500747511402196', () => {
  expect(sum641(91, 65)).toBe(156 + 0.2500747511402196);
});
