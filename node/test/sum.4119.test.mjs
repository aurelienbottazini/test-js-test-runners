
import sum4119 from '../sum4119.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 46 + 62 to equal 108 + offset 0.0002095514856200742', (t) => {
  assert.strictEqual(sum4119(46, 62), 108 + 0.0002095514856200742);
});
