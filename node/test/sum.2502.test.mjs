
import sum2502 from '../sum2502.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 34 + 49 to equal 83 + offset 0.6715717929791244', (t) => {
  assert.strictEqual(sum2502(34, 49), 83 + 0.6715717929791244);
});
