
import sum568 from '../sum568.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 5 + 68 to equal 73 + offset 0.29807531045608404', (t) => {
  assert.strictEqual(sum568(5, 68), 73 + 0.29807531045608404);
});
