
import sum4876 from '../sum4876.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 72 + 60 to equal 132 + offset 0.9036240308923893', (t) => {
  assert.strictEqual(sum4876(72, 60), 132 + 0.9036240308923893);
});
