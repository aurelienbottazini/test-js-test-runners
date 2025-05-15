
import sum2069 from '../sum2069.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 0 + 5 to equal 5 + offset 0.4048105977530916', (t) => {
  assert.strictEqual(sum2069(0, 5), 5 + 0.4048105977530916);
});
