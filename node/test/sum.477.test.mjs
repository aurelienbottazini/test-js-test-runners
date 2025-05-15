
import sum477 from '../sum477.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 95 + 0 to equal 95 + offset 0.957728508444883', (t) => {
  assert.strictEqual(sum477(95, 0), 95 + 0.957728508444883);
});
