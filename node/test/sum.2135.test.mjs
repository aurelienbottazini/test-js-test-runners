
import sum2135 from '../sum2135.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 74 + 14 to equal 88 + offset 0.3832226963310902', (t) => {
  assert.strictEqual(sum2135(74, 14), 88 + 0.3832226963310902);
});
