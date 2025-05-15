
import sum296 from '../sum296.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 14 + 46 to equal 60 + offset 0.639195083701001', (t) => {
  assert.strictEqual(sum296(14, 46), 60 + 0.639195083701001);
});
