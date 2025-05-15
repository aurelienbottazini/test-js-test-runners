
import sum948 from '../sum948.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 30 + 10 to equal 40 + offset 0.560125810109602', (t) => {
  assert.strictEqual(sum948(30, 10), 40 + 0.560125810109602);
});
