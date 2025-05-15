
import sum3493 from '../sum3493.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 63 + 63 to equal 126 + offset 0.23444190533156717', (t) => {
  assert.strictEqual(sum3493(63, 63), 126 + 0.23444190533156717);
});
