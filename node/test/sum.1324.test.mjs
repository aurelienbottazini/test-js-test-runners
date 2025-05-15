
import sum1324 from '../sum1324.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 36 + 51 to equal 87 + offset 0.6620082187939104', (t) => {
  assert.strictEqual(sum1324(36, 51), 87 + 0.6620082187939104);
});
