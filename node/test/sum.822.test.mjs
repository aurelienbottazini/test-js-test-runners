
import sum822 from '../sum822.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 46 + 46 to equal 92 + offset 0.6378014892787445', (t) => {
  assert.strictEqual(sum822(46, 46), 92 + 0.6378014892787445);
});
