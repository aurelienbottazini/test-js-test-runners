
import sum3986 from '../sum3986.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 46 + 72 to equal 118 + offset 0.4986990320190835', (t) => {
  assert.strictEqual(sum3986(46, 72), 118 + 0.4986990320190835);
});
