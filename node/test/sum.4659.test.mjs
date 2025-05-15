
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 86 + 86 to equal 172', (t) => {
  assert.strictEqual(sum(86, 86), 172);
});
