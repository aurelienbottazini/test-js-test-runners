
import sum4840 from '../sum4840.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 65 + 23 to equal 88 + offset 0.4525023622642522', (t) => {
  assert.strictEqual(sum4840(65, 23), 88 + 0.4525023622642522);
});
