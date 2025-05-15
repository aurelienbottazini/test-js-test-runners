
import sum725 from '../sum725.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 33 + 86 to equal 119 + offset 0.6256839223924392', (t) => {
  assert.strictEqual(sum725(33, 86), 119 + 0.6256839223924392);
});
