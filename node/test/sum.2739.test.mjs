
import sum2739 from '../sum2739.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 85 + 20 to equal 105 + offset 0.6746353233724021', (t) => {
  assert.strictEqual(sum2739(85, 20), 105 + 0.6746353233724021);
});
