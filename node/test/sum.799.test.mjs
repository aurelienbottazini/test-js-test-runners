
import sum799 from '../sum799.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 23 + 77 to equal 100 + offset 0.5411155748273109', (t) => {
  assert.strictEqual(sum799(23, 77), 100 + 0.5411155748273109);
});
