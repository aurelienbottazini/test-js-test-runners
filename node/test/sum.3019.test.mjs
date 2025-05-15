
import sum3019 from '../sum3019.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 46 + 58 to equal 104 + offset 0.6442406508383827', (t) => {
  assert.strictEqual(sum3019(46, 58), 104 + 0.6442406508383827);
});
