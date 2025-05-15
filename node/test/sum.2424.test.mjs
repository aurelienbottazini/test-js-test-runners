
import sum2424 from '../sum2424.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 78 + 82 to equal 160 + offset 0.914975397499135', (t) => {
  assert.strictEqual(sum2424(78, 82), 160 + 0.914975397499135);
});
