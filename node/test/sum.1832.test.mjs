
import sum1832 from '../sum1832.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 68 + 58 to equal 126 + offset 0.5174992966374973', (t) => {
  assert.strictEqual(sum1832(68, 58), 126 + 0.5174992966374973);
});
