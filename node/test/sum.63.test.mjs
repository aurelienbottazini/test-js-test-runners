
import sum63 from '../sum63.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 17 + 72 to equal 89 + offset 0.5339303154088119', (t) => {
  assert.strictEqual(sum63(17, 72), 89 + 0.5339303154088119);
});
