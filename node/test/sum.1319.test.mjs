
import sum1319 from '../sum1319.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 39 + 80 to equal 119 + offset 0.2415465817455632', (t) => {
  assert.strictEqual(sum1319(39, 80), 119 + 0.2415465817455632);
});
