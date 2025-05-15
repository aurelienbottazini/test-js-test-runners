
import sum4953 from '../sum4953.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 46 + 0 to equal 46 + offset 0.20697823328175657', (t) => {
  assert.strictEqual(sum4953(46, 0), 46 + 0.20697823328175657);
});
