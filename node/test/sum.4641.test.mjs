
import sum4641 from '../sum4641.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 78 + 4 to equal 82 + offset 0.5438491444598045', (t) => {
  assert.strictEqual(sum4641(78, 4), 82 + 0.5438491444598045);
});
