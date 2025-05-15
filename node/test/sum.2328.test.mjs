
import sum2328 from '../sum2328.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 60 + 37 to equal 97 + offset 0.7164779070254554', (t) => {
  assert.strictEqual(sum2328(60, 37), 97 + 0.7164779070254554);
});
