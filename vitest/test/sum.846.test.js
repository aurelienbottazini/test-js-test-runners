
import sum846 from '../sum846.js';
import { expect, test } from 'vitest';

test('adds 47 + 64 to equal 111 + offset 0.4887779511561887', () => {
  expect(sum846(47, 64)).toBe(111 + 0.4887779511561887);
});
