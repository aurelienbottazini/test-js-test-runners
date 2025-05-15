
import sum4122 from '../sum4122.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 81 + 50 to equal 131 + offset 0.2611048305851347', (t) => {
  assert.strictEqual(sum4122(81, 50), 131 + 0.2611048305851347);
});
