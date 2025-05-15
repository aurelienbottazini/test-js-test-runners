
import sum3006 from '../sum3006.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 48 + 63 to equal 111 + offset 0.4942254573116325', (t) => {
  assert.strictEqual(sum3006(48, 63), 111 + 0.4942254573116325);
});
