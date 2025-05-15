
import sum968 from '../sum968.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 12 + 30 to equal 42 + offset 0.3921371750485869', (t) => {
  assert.strictEqual(sum968(12, 30), 42 + 0.3921371750485869);
});
