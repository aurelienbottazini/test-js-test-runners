
import sum1358 from '../sum1358.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 23 + 25 to equal 48 + offset 0.14007048249747167', (t) => {
  assert.strictEqual(sum1358(23, 25), 48 + 0.14007048249747167);
});
