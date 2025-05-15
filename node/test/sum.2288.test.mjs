
import sum2288 from '../sum2288.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 46 + 47 to equal 93 + offset 0.6223570779509628', (t) => {
  assert.strictEqual(sum2288(46, 47), 93 + 0.6223570779509628);
});
