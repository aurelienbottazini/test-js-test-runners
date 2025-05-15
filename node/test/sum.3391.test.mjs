
import sum3391 from '../sum3391.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 75 + 28 to equal 103 + offset 0.5897592380904747', (t) => {
  assert.strictEqual(sum3391(75, 28), 103 + 0.5897592380904747);
});
