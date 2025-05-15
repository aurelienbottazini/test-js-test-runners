
import sum1648 from '../sum1648.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 46 + 83 to equal 129 + offset 0.9461032535273893', (t) => {
  assert.strictEqual(sum1648(46, 83), 129 + 0.9461032535273893);
});
