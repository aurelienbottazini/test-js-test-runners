
import sum2902 from '../sum2902.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 19 + 82 to equal 101 + offset 0.6374105524362534', (t) => {
  assert.strictEqual(sum2902(19, 82), 101 + 0.6374105524362534);
});
