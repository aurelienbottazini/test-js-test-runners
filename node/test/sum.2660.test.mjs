
import sum2660 from '../sum2660.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 99 + 49 to equal 148 + offset 0.05535668875466293', (t) => {
  assert.strictEqual(sum2660(99, 49), 148 + 0.05535668875466293);
});
