
import sum2461 from '../sum2461.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 51 + 31 to equal 82 + offset 0.14717924158299733', (t) => {
  assert.strictEqual(sum2461(51, 31), 82 + 0.14717924158299733);
});
