
import sum65 from '../sum65.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 52 + 28 to equal 80 + offset 0.06942497187576957', (t) => {
  assert.strictEqual(sum65(52, 28), 80 + 0.06942497187576957);
});
