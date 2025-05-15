
import sum949 from '../sum949.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 46 + 73 to equal 119 + offset 0.17563306137834522', (t) => {
  assert.strictEqual(sum949(46, 73), 119 + 0.17563306137834522);
});
