
import sum4051 from '../sum4051.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 46 + 13 to equal 59 + offset 0.41420081073546355', (t) => {
  assert.strictEqual(sum4051(46, 13), 59 + 0.41420081073546355);
});
