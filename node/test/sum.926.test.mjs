
import sum926 from '../sum926.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 37 + 1 to equal 38 + offset 0.9572625864844054', (t) => {
  assert.strictEqual(sum926(37, 1), 38 + 0.9572625864844054);
});
