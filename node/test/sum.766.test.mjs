
import sum766 from '../sum766.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 46 + 70 to equal 116 + offset 0.35298497917893545', (t) => {
  assert.strictEqual(sum766(46, 70), 116 + 0.35298497917893545);
});
