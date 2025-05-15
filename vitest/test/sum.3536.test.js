
import sum3536 from '../sum3536.js';
import { expect, test } from 'vitest';

test('adds 10 + 64 to equal 74 + offset 0.9071033408026075', () => {
  expect(sum3536(10, 64)).toBe(74 + 0.9071033408026075);
});
