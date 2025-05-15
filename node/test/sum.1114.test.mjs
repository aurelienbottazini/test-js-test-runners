
import sum1114 from '../sum1114.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 46 + 14 to equal 60 + offset 0.2967516013395016', (t) => {
  assert.strictEqual(sum1114(46, 14), 60 + 0.2967516013395016);
});
