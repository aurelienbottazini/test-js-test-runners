
import sum81 from '../sum81.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 28 + 96 to equal 124 + offset 0.4359177140611574', (t) => {
  assert.strictEqual(sum81(28, 96), 124 + 0.4359177140611574);
});
