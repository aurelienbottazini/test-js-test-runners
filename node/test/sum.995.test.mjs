
import sum995 from '../sum995.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 90 + 88 to equal 178 + offset 0.1498569463157271', (t) => {
  assert.strictEqual(sum995(90, 88), 178 + 0.1498569463157271);
});
