
import sum2012 from '../sum2012.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 72 + 34 to equal 106 + offset 0.3866409669215103', (t) => {
  assert.strictEqual(sum2012(72, 34), 106 + 0.3866409669215103);
});
