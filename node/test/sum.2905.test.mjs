
import sum2905 from '../sum2905.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 92 + 34 to equal 126 + offset 0.9278595849930915', (t) => {
  assert.strictEqual(sum2905(92, 34), 126 + 0.9278595849930915);
});
