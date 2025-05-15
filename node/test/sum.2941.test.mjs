
import sum2941 from '../sum2941.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 42 + 49 to equal 91 + offset 0.6222165289337662', (t) => {
  assert.strictEqual(sum2941(42, 49), 91 + 0.6222165289337662);
});
