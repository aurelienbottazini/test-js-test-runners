
import sum4089 from '../sum4089.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 91 + 33 to equal 124 + offset 0.508452920435558', (t) => {
  assert.strictEqual(sum4089(91, 33), 124 + 0.508452920435558);
});
