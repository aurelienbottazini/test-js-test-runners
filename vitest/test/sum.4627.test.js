
import sum4627 from '../sum4627.js';
import { expect, test } from 'vitest';

test('adds 1 + 54 to equal 55 + offset 0.4258246297620608', () => {
  expect(sum4627(1, 54)).toBe(55 + 0.4258246297620608);
});
