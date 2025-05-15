
import sum2042 from '../sum2042.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 46 + 67 to equal 113 + offset 0.5039511151770025', (t) => {
  assert.strictEqual(sum2042(46, 67), 113 + 0.5039511151770025);
});
