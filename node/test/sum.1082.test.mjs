
import sum1082 from '../sum1082.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 42 + 92 to equal 134 + offset 0.9084526819745763', (t) => {
  assert.strictEqual(sum1082(42, 92), 134 + 0.9084526819745763);
});
