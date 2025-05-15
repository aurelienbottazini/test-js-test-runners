
import sum642 from '../sum642.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 46 + 13 to equal 59 + offset 0.5117945470655907', (t) => {
  assert.strictEqual(sum642(46, 13), 59 + 0.5117945470655907);
});
