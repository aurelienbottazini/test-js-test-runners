
import sum1414 from '../sum1414.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 18 + 82 to equal 100 + offset 0.24448189248496188', (t) => {
  assert.strictEqual(sum1414(18, 82), 100 + 0.24448189248496188);
});
