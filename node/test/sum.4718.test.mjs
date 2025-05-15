
import sum4718 from '../sum4718.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 75 + 22 to equal 97 + offset 0.4629133417086455', (t) => {
  assert.strictEqual(sum4718(75, 22), 97 + 0.4629133417086455);
});
