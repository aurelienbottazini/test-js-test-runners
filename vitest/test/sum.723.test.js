
import sum723 from '../sum723.js';
import { expect, test } from 'vitest';

test('adds 57 + 71 to equal 128 + offset 0.404107959413193', () => {
  expect(sum723(57, 71)).toBe(128 + 0.404107959413193);
});
