
import sum319 from '../sum319.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 78 + 63 to equal 141 + offset 0.3858827408398937', (t) => {
  assert.strictEqual(sum319(78, 63), 141 + 0.3858827408398937);
});
