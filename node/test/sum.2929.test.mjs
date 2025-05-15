
import sum2929 from '../sum2929.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 46 + 2 to equal 48 + offset 0.23812607526573382', (t) => {
  assert.strictEqual(sum2929(46, 2), 48 + 0.23812607526573382);
});
