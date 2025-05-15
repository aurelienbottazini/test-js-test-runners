
import sum4753 from '../sum4753.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 76 + 54 to equal 130 + offset 0.3225153809364846', (t) => {
  assert.strictEqual(sum4753(76, 54), 130 + 0.3225153809364846);
});
