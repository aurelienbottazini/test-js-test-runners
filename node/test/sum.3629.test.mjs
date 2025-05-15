
import sum3629 from '../sum3629.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 46 + 92 to equal 138 + offset 0.17724248093896544', (t) => {
  assert.strictEqual(sum3629(46, 92), 138 + 0.17724248093896544);
});
