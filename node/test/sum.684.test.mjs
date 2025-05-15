
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 62 + 86 to equal 148', (t) => {
  assert.strictEqual(sum(62, 86), 148);
});
