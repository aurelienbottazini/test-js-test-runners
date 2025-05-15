
import sum1089 from '../sum1089.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 96 + 74 to equal 170 + offset 0.5098930320200572', (t) => {
  assert.strictEqual(sum1089(96, 74), 170 + 0.5098930320200572);
});
