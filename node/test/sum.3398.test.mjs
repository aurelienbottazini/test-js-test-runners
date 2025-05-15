
import sum3398 from '../sum3398.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 46 + 20 to equal 66 + offset 0.6860469482948137', (t) => {
  assert.strictEqual(sum3398(46, 20), 66 + 0.6860469482948137);
});
