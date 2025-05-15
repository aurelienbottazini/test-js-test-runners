
import sum4568 from '../sum4568.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 62 + 28 to equal 90 + offset 0.4835917562860744', (t) => {
  assert.strictEqual(sum4568(62, 28), 90 + 0.4835917562860744);
});
