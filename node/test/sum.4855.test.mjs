
import sum4855 from '../sum4855.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 0 + 34 to equal 34 + offset 0.7563222171082737', (t) => {
  assert.strictEqual(sum4855(0, 34), 34 + 0.7563222171082737);
});
