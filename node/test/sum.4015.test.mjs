
import sum4015 from '../sum4015.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 46 + 91 to equal 137 + offset 0.5310595131385532', (t) => {
  assert.strictEqual(sum4015(46, 91), 137 + 0.5310595131385532);
});
