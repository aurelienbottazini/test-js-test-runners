
import sum1 from '../sum1.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 46 + 94 to equal 140 + offset 0.6444482969937464', (t) => {
  assert.strictEqual(sum1(46, 94), 140 + 0.6444482969937464);
});
