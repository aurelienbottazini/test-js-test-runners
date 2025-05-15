
import sum492 from '../sum492.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 59 + 30 to equal 89 + offset 0.5685559832664873', (t) => {
  assert.strictEqual(sum492(59, 30), 89 + 0.5685559832664873);
});
