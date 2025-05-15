
import sum4881 from '../sum4881.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 24 + 46 to equal 70 + offset 0.8415475633923442', (t) => {
  assert.strictEqual(sum4881(24, 46), 70 + 0.8415475633923442);
});
