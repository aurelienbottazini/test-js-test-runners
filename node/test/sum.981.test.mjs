
import sum981 from '../sum981.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 77 + 29 to equal 106 + offset 0.8400150954096867', (t) => {
  assert.strictEqual(sum981(77, 29), 106 + 0.8400150954096867);
});
